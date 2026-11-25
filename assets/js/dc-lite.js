/*
 * dc-lite: kleine Laufzeit für die exportierten Seiten aus dem Claude-Design-Canvas.
 * Liest die Vorlage in <x-dc> und die Klasse in <script type="text/x-dc">,
 * und rendert beides mit Preact (MIT). Unterstützt {{holes}}, <sc-for>, <sc-if>,
 * Event-Attribute (onClick="{{fn}}"), <helmet> und die React-Lebenszyklus-Methoden.
 */
(function () {
  'use strict';
  var P = window.preact, h = P.h;
  var BOOL = { autoplay: 1, loop: 1, muted: 1, playsinline: 1, controls: 1, required: 1, disabled: 1, checked: 1, selected: 1, hidden: 1, open: 1, multiple: 1, readonly: 1 };
  var PROP_NAME = { 'class': 'class', 'for': 'for', 'playsinline': 'playsInline', 'readonly': 'readOnly', 'autoplay': 'autoplay' };

  function lookup(path, ctx) {
    path = path.trim();
    if (path === 'true') return true;
    if (path === 'false') return false;
    if (path === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(path)) return Number(path);
    if (/^(['"]).*\1$/.test(path)) return path.slice(1, -1);
    var parts = path.split('.'), cur = ctx;
    for (var i = 0; i < parts.length; i++) { if (cur == null) return undefined; cur = cur[parts[i]]; }
    return cur;
  }
  var WHOLE = /^\s*\{\{([^}]+)\}\}\s*$/, ANY = /\{\{([^}]+)\}\}/g;
  function interp(str, ctx) {
    var m = str.match(WHOLE);
    if (m) return lookup(m[1], ctx);
    return str.replace(ANY, function (_, p) { var v = lookup(p, ctx); return v == null ? '' : String(v); });
  }

  function attrProps(el, ctx) {
    var props = {};
    for (var i = 0; i < el.attributes.length; i++) {
      var a = el.attributes[i], name = a.name, raw = a.value;
      if (name.indexOf('hint-') === 0) continue;
      var val = raw.indexOf('{{') >= 0 ? interp(raw, ctx) : raw;
      if (/^on[a-z]+$/i.test(name)) {
        // onclick -> onClick (Attribute kommen klein geschrieben aus dem Parser)
        var ev = 'on' + name.charAt(2).toUpperCase() + name.slice(3);
        if (typeof val === 'function') props[ev] = val;
        continue;
      }
      if (BOOL[name] && val === '') val = true;
      if (name === 'value' && el.tagName === 'OPTION') { props.value = val; continue; }
      props[PROP_NAME[name] || name] = val;
    }
    return props;
  }

  function build(node, ctx, out) {
    if (node.nodeType === 3) {
      var t = node.nodeValue;
      out.push(t.indexOf('{{') >= 0 ? interp(t, ctx) : t);
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.tagName.toLowerCase();
    if (tag === 'helmet') return;
    if (tag === 'sc-for') {
      var list = lookup((node.getAttribute('list') || '').replace(/^\s*\{\{|\}\}\s*$/g, ''), ctx) || [];
      var as = node.getAttribute('as') || 'item';
      for (var i = 0; i < list.length; i++) {
        var c = Object.create(ctx); c[as] = list[i]; c.$index = i;
        kids(node, c, out);
      }
      return;
    }
    if (tag === 'sc-if') {
      var v = lookup((node.getAttribute('value') || '').replace(/^\s*\{\{|\}\}\s*$/g, ''), ctx);
      if (v) kids(node, ctx, out);
      return;
    }
    var children = [];
    var src = tag === 'template' ? node.content : node;
    kids(src, ctx, children);
    out.push(h.apply(null, [tag, attrProps(node, ctx)].concat(children)));
  }
  function kids(node, ctx, out) { var cn = node.childNodes; for (var i = 0; i < cn.length; i++) build(cn[i], ctx, out); }

  function DCLogic(props) { P.Component.call(this, props); this.state = this.state || {}; }
  DCLogic.prototype = Object.create(P.Component.prototype);
  DCLogic.prototype.constructor = DCLogic;
  DCLogic.prototype.renderVals = function () { return {}; };
  DCLogic.prototype.render = function () {
    var vals = this.renderVals() || {};
    var out = []; kids(this.__tpl, vals, out);
    return h(P.Fragment, null, out);
  };
  window.DCLogic = DCLogic;

  function boot() {
    var host = document.querySelector('x-dc');
    var script = document.querySelector('script[type="text/x-dc"]');
    if (!host) return;
    // <helmet>: Stylesheets und <style> in den <head> übernehmen
    var helmet = host.querySelector('helmet');
    if (helmet) { Array.prototype.slice.call(helmet.children).forEach(function (n) { document.head.appendChild(n.cloneNode(true)); }); helmet.parentNode.removeChild(helmet); }
    var tpl = document.createElement('template');
    tpl.innerHTML = host.innerHTML;
    var Comp = DCLogic;
    if (script) {
      // Die Klasse stammt aus derselben, mitgelieferten Seite (kein Fremdcode).
      Comp = new Function('DCLogic', script.textContent + '\n;return typeof Component !== "undefined" ? Component : DCLogic;')(DCLogic);
    }
    var props = {};
    try {
      var dp = script && script.getAttribute('data-props');
      if (dp) { var spec = JSON.parse(dp); Object.keys(spec).forEach(function (k) { if (k.charAt(0) !== '$' && spec[k] && 'default' in spec[k]) props[k] = spec[k]['default']; }); }
    } catch (e) {}
    Comp.prototype.__tpl = tpl.content;
    var root = document.createElement('div');
    root.id = 'dc-root';
    host.parentNode.insertBefore(root, host);
    host.parentNode.removeChild(host);
    P.render(h(Comp, props), root);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
