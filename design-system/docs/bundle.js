/* @ds-bundle: {"format":4,"namespace":"Madita","components":[{"name":"Button"},{"name":"SectionLabel"},{"name":"Highlight"},{"name":"SectionHeader"},{"name":"NavBar"},{"name":"EmailCapture"},{"name":"Checkbox"},{"name":"StatusChip"},{"name":"Stat"},{"name":"FeatureGrid"},{"name":"FeatureCard"},{"name":"WidgetLanguages"},{"name":"WidgetStatus"},{"name":"WidgetChart"},{"name":"WidgetChecklist"},{"name":"Testimonial"},{"name":"Step"},{"name":"Badge"},{"name":"Divider"},{"name":"LogoMarquee"},{"name":"Accordion"},{"name":"Tabs"},{"name":"Sheet"},{"name":"Dialog"},{"name":"Field"},{"name":"Switch"},{"name":"Tooltip"},{"name":"Toast"}]} */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef, useId = React.useId;

  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }
  function omit(obj, keys) { var o = {}; for (var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k]; } return o; }
  function useControlled(value, defaultValue) {
    var s = useState(defaultValue);
    var isControlled = value !== undefined;
    return [isControlled ? value : s[0], function (v) { if (!isControlled) s[1](v); }];
  }
  function useEscape(active, onClose) {
    useEffect(function () {
      if (!active) return undefined;
      function onKey(e) { if (e.key === "Escape" && onClose) onClose(); }
      document.addEventListener("keydown", onKey);
      return function () { document.removeEventListener("keydown", onKey); };
    }, [active, onClose]);
  }

  /* Phosphor Icons (Regular, MIT) – kuratierter Satz, färbt sich über currentColor */
  var PHOSPHOR = {"arrow-right":["M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"],"arrow-left":["M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"],"arrow-down":["M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"],"arrow-up-right":["M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"],"caret-down":["M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"],"caret-right":["M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"],"check":["M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"],"check-circle":["M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"],"x":["M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"],"x-circle":["M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"],"plus":["M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"],"minus":["M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"],"list":["M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"],"magnifying-glass":["M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"],"play":["M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"],"pause":["M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"],"speaker-high":["M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"],"speaker-slash":["M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"],"microphone":["M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"],"headset":["M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"],"phone":["M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"],"chat-circle-text":["M168,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,112Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm72-8A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"],"envelope-simple":["M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"],"calendar-blank":["M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"],"clock":["M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"],"globe":["M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"],"translate":["M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z"],"users":["M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"],"user-circle":["M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"],"buildings":["M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"],"briefcase":["M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"],"handshake":["M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"],"trend-up":["M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"],"chart-bar":["M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"],"squares-four":["M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"],"plugs-connected":["M237.66,18.34a8,8,0,0,0-11.32,0l-52.4,52.41-5.37-5.38a32.05,32.05,0,0,0-45.26,0L100,88.69l-6.34-6.35A8,8,0,0,0,82.34,93.66L88.69,100,65.37,123.31a32,32,0,0,0,0,45.26l5.38,5.37-52.41,52.4a8,8,0,0,0,11.32,11.32l52.4-52.41,5.37,5.38a32,32,0,0,0,45.26,0L156,167.31l6.34,6.35a8,8,0,0,0,11.32-11.32L167.31,156l23.32-23.31a32,32,0,0,0,0-45.26l-5.38-5.37,52.41-52.4A8,8,0,0,0,237.66,18.34Zm-116.29,161a16,16,0,0,1-22.62,0L76.69,157.25a16,16,0,0,1,0-22.62L100,111.31,144.69,156Zm57.94-57.94L156,144.69,111.31,100l23.32-23.31a16,16,0,0,1,22.62,0l22.06,22A16,16,0,0,1,179.31,121.37ZM88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM24.57,93A8,8,0,0,1,35,88.57l20,8A8,8,0,0,1,49,111.43l-20-8A8,8,0,0,1,24.57,93ZM231.43,163a8,8,0,0,1-10.4,4.46l-20-8A8,8,0,1,1,207,144.57l20,8A8,8,0,0,1,231.43,163Zm-64,58.06A8,8,0,0,1,152.57,227l-8-20A8,8,0,0,1,159.43,201Z"],"shield-check":["M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"],"lock-simple":["M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Z"],"file-text":["M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"],"download-simple":["M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"],"link":["M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,16,.45A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z"],"info":["M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"],"warning":["M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"],"star":["M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"],"quotes":["M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"],"map-pin":["M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"],"lightning":["M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"],"eye":["M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"]};
  function Icon(props) {
    var paths = PHOSPHOR[props.name];
    if (!paths) return null;
    var size = props.size;
    var a11y = props.label ? { role: "img", "aria-label": props.label } : { "aria-hidden": "true", focusable: "false" };
    return h("svg", Object.assign({ className: cx("md-icon", props.className), viewBox: "0 0 256 256", fill: "currentColor", style: size ? { width: size, height: size } : undefined }, a11y),
      paths.map(function (d, i) { return h("path", { key: i, d: d }); }));
  }
  Icon.names = Object.keys(PHOSPHOR);
  function ArrowRight() { return h(Icon, { name: "arrow-right" }); }

  /* ---------- Quelle: Figma ---------- */

  function Button(props) {
    var variant = props.variant || "primary", size = props.size || "md";
    var rest = omit(props, ["variant", "size", "icon", "href", "className", "children"]);
    var className = cx("md-btn", "md-btn--" + variant, size === "xs" && "md-btn--xs", size === "nav" && "md-btn--nav", props.icon && size === "md" && "md-btn--icon", props.className);
    var content = [h("span", { key: "l" }, props.children), props.icon ? h(Icon, { key: "i", name: props.icon === "arrow" ? "arrow-right" : props.icon }) : null];
    if (props.href) return h("a", Object.assign({}, rest, { href: props.href, className: className }), content);
    return h("button", Object.assign({ type: "button" }, rest, { className: className }), content);
  }

  function SectionLabel(props) {
    var tone = props.tone || "brand";
    return h("span", { className: cx("md-label", "md-label--" + tone, props.className) }, props.children);
  }

  function Highlight(props) {
    return h("mark", { className: cx("md-mark", props.className) }, props.children);
  }

  function SectionHeader(props) {
    var align = props.align || "center";
    var Tag = props.as || "h2";
    return h("div", { className: cx("md-sh", align === "center" && "md-sh--center", props.className) },
      props.label ? h(SectionLabel, { tone: props.labelTone }, props.label) : null,
      h(Tag, { className: "md-h2" }, props.title),
      props.children ? h("p", { className: "md-lead" }, props.children) : null);
  }

  function NavBar(props) {
    var links = props.links || [];
    var hidden = useState(false), ref = useRef(null);
    useEffect(function () {
      if (props.autoHide === false) return;
      var last = window.scrollY;
      function onScroll() {
        var y = window.scrollY;
        hidden[1](y > last && y > 120);
        last = y;
      }
      function onMove(e) { if (e.clientY < 16) hidden[1](false); }
      window.addEventListener("scroll", onScroll, { passive: true });
      var fine = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      if (fine) window.addEventListener("mousemove", onMove, { passive: true });
      return function () { window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); };
    }, [props.autoHide]);
    return h("header", { ref: ref, className: cx("md-nav", props.sticky && "md-nav--sticky", hidden[0] && "is-hidden", props.className) },
      h("a", { className: "md-nav__logo", href: props.homeHref || "/", "aria-label": "madita.ai Startseite" },
        props.logoSrc ? h("img", { src: props.logoSrc, alt: "madita.ai" }) : h("span", { style: { fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 28 } }, "madita.ai")),
      h("nav", { "aria-label": "Hauptnavigation" },
        h("ul", { className: "md-nav__links" }, links.map(function (l) {
          return h("li", { key: l.label }, h("a", { href: l.href || "#" }, l.label));
        }))),
      h("div", { className: "md-nav__actions" },
        props.loginHref !== null ? h("a", { className: "md-nav__login", href: props.loginHref || "#" }, props.loginLabel || "Anmelden") : null,
        h(Button, { variant: "primary", size: "nav", href: props.ctaHref || "#" }, props.ctaLabel || "Kostenlos ausprobieren"),
        h("button", { type: "button", className: "md-nav__menu", "aria-label": "Menü öffnen", onClick: props.onMenu },
          h(Icon, { name: "list", size: 24 }))));
  }

  function EmailCapture(props) {
    var id = useId();
    var tone = props.tone || "light";
    function onSubmit(e) {
      e.preventDefault();
      var v = e.currentTarget.elements.namedItem("email").value;
      if (props.onSubmit) props.onSubmit(v);
    }
    return h("form", { className: cx("md-capture", "md-capture--" + tone, props.className), onSubmit: onSubmit },
      h("label", { htmlFor: id, className: "md-sr" }, props.label || "Firmen-E-Mail-Adresse"),
      h("input", { id: id, name: "email", type: "email", required: true, autoComplete: "email", className: "md-capture__input", placeholder: props.placeholder || "name@firma.de" }),
      h(Button, { type: "submit", variant: props.buttonVariant || (tone === "dark" ? "accent" : "accent") }, props.buttonLabel || "Interview starten"));
  }

  function Checkbox(props) {
    var rest = omit(props, ["label", "className", "children"]);
    return h("label", { className: cx("md-check", props.className) },
      h("input", Object.assign({ type: "checkbox" }, rest)),
      h("span", null, props.label || props.children));
  }

  function StatusChip(props) {
    return h("div", { className: cx("md-chip", props.tone === "success" && "md-chip--success", props.className) },
      h("span", null, props.label), h("span", { className: "md-chip__value" }, props.value));
  }

  function Stat(props) {
    return h("div", { className: cx("md-stat", props.className) },
      h("span", { className: "md-stat__value" }, props.value),
      h("span", { className: "md-stat__label" }, props.label));
  }

  /* Feature-Karten: oben ein Widget (Mini-UI des Produkts), darunter Titel + ein Satz */
  function FeatureGrid(props) {
    return h("div", { className: cx("md-fgrid", props.className), role: "list" },
      React.Children.map(props.children, function (c) { return c ? h("div", { role: "listitem" }, c) : null; }));
  }

  function FeatureCard(props) {
    var tone = props.tone || "lime";
    var Tag = props.as || "h3";
    var isCta = !props.widget;
    return h("article", { className: cx("md-card", "md-card--" + tone, isCta && "md-card--cta", props.className) },
      props.widget || null,
      h("div", { className: "md-card__body" },
        h(Tag, { className: "md-card__title" }, props.title),
        props.children ? h("p", { className: "md-card__text" }, props.children) : null),
      props.action ? h("div", { className: "md-card__action" }, props.action) : null);
  }

  function WidgetHead(props) {
    return h("div", { className: "md-widget__head" }, props.live ? h("span", { className: "md-widget__dot", "aria-hidden": "true" }) : null, props.children);
  }

  function WidgetLanguages(props) {
    var words = props.words || ["Guten Tag", "Hello", "Merhaba", "Dzień dobry", "Bonjour", "Grüezi", "Ciao", "Hola"];
    var style = props.duration ? { "--md-ticker-duration": props.duration + "s" } : undefined;
    return h("div", { className: "md-widget md-widget--ticker", role: "img", "aria-label": props.label || ("Begrüßungen in vielen Sprachen: " + words.join(", ")) },
      h("div", { className: "md-ticker-mask" },
        h("ul", { className: "md-ticker", style: style, "aria-hidden": "true" },
          words.concat(words).map(function (w, i) { return h("li", { key: i }, w); }))));
  }

  function WidgetStatus(props) {
    var items = props.items || [];
    return h("div", { className: "md-widget" },
      h(WidgetHead, { live: props.live !== false }, props.label || "Madita ist online"),
      h("div", { className: "md-widget__stack" }, items.slice(0, 3).map(function (it, i) {
        return h(StatusChip, { key: i, label: it.label, value: it.value, tone: it.tone });
      })));
  }

  function WidgetChart(props) {
    var values = props.values || [20, 26, 37, 60, 86, 109];
    var max = Math.max.apply(null, values);
    var hot = props.highlight != null ? props.highlight : 2;
    return h("div", { className: "md-widget", role: "img", "aria-label": props.description || ((props.label || "Interviews pro Woche") + ": steigend") },
      h(WidgetHead, null, props.label || "Interviews pro Woche"),
      h("ul", { className: "md-bars", "aria-hidden": "true" }, values.map(function (v, i) {
        return h("li", { key: i, className: i >= values.length - hot ? "is-hot" : null, style: { height: Math.round((v / max) * 109) + "px" } });
      })));
  }

  function WidgetChecklist(props) {
    var items = props.items || [];
    return h("div", { className: "md-widget" },
      props.label ? h(WidgetHead, null, props.label) : null,
      h("div", { className: cx("md-widget__stack", !props.label && "md-widget__stack--top") }, items.slice(0, 4).map(function (it, i) {
        var label = typeof it === "string" ? it : it.label;
        var value = typeof it === "string" ? (props.value || "Bereit") : (it.value || props.value || "Bereit");
        return h(StatusChip, { key: i, label: label, value: value, tone: "success" });
      })));
  }

  function Testimonial(props) {
    return h("figure", { className: cx("md-quote", props.className) },
      h("blockquote", null, props.quote),
      (props.author || props.role) ? h("figcaption", null, props.author ? h("strong", null, props.author) : null, props.author && props.role ? " · " : null, props.role) : null);
  }

  function Step(props) {
    return h("div", { className: cx("md-step", props.active && "md-step--active", props.className) },
      h("h3", { className: "md-step__title" }, props.number != null ? props.number + " · " : "", props.title),
      props.children ? h("p", { className: "md-step__text" }, props.children) : null);
  }

  function Badge(props) {
    return h("span", { className: cx("md-badge", "md-badge--" + (props.tone || "dark"), props.className) }, props.children);
  }

  function Divider(props) {
    return h("hr", { className: cx("md-divider", props.className) });
  }

  function marqueeTrack(items, duration, ltr, key) {
    var style = duration ? { "--md-marquee-duration": duration + "s" } : undefined;
    return h("div", { key: key, className: cx("md-marquee__track", ltr && "md-marquee__track--ltr"), style: style },
      items.map(function (c, i) { return h("div", { key: "a" + i }, c); }),
      items.map(function (c, i) { return h("div", { key: "b" + i, "aria-hidden": "true" }, c); }));
  }
  function LogoMarquee(props) {
    var items = React.Children.toArray(props.children);
    var rows = Math.max(1, Math.min(3, props.rows || 1));
    var label = props.label || "Kundenlogos";
    if (rows === 1) {
      return h("div", { className: cx("md-marquee", props.className), role: "region", "aria-label": label },
        marqueeTrack(items, props.duration, false, "r0"));
    }
    var n = Math.ceil(items.length / rows);
    var base = props.duration || 44;
    return h("div", { className: cx("md-marquee-rows", props.className), role: "region", "aria-label": label },
      Array.from({ length: rows }, function (_, r) {
        var part = items.slice(r * n, (r + 1) * n);
        return h("div", { key: r, className: "md-marquee" }, marqueeTrack(part, base + r * 3, r % 2 === 0, "t" + r));
      }));
  }

  /* ---------- Ergänzungen (shadcn-inspiriert) ---------- */

  function Accordion(props) {
    var items = props.items || [];
    var st = useState(props.defaultOpen != null ? [props.defaultOpen] : []);
    var open = st[0], setOpen = st[1];
    var base = useId();
    function toggle(i) {
      setOpen(function (cur) {
        var isOpen = cur.indexOf(i) >= 0;
        if (props.multiple) return isOpen ? cur.filter(function (x) { return x !== i; }) : cur.concat([i]);
        return isOpen ? [] : [i];
      });
    }
    return h("div", { className: cx("md-acc", props.className) }, items.map(function (it, i) {
      var isOpen = open.indexOf(i) >= 0, tid = base + "t" + i, pid = base + "p" + i;
      return h("div", { className: "md-acc__item", key: i },
        h("h3", { style: { margin: 0 } },
          h("button", { type: "button", id: tid, className: "md-acc__trigger", "aria-expanded": isOpen ? "true" : "false", "aria-controls": pid, onClick: function () { toggle(i); } },
            h("span", null, it.title), h("span", { className: "md-acc__sign", "aria-hidden": "true" }, "+"))),
        h("div", { id: pid, role: "region", "aria-labelledby": tid, className: "md-acc__panel", hidden: !isOpen }, it.content));
    }));
  }

  function Tabs(props) {
    var items = props.items || [];
    var c = useControlled(props.value, props.defaultValue || 0);
    var active = c[0], setActive = c[1];
    var base = useId();
    var refs = useRef([]);
    function select(i) { setActive(i); if (props.onChange) props.onChange(i); }
    function onKey(e) {
      var n = items.length, next = null;
      if (e.key === "ArrowRight") next = (active + 1) % n;
      if (e.key === "ArrowLeft") next = (active - 1 + n) % n;
      if (next !== null) { e.preventDefault(); select(next); if (refs.current[next]) refs.current[next].focus(); }
    }
    return h("div", { className: cx("md-tabs", props.className) },
      h("div", { role: "tablist", "aria-label": props.label, className: "md-tabs__list", onKeyDown: onKey }, items.map(function (it, i) {
        return h("button", { key: i, type: "button", role: "tab", id: base + "t" + i, "aria-controls": base + "p" + i, "aria-selected": i === active ? "true" : "false", tabIndex: i === active ? 0 : -1, className: "md-tabs__tab", ref: function (el) { refs.current[i] = el; }, onClick: function () { select(i); } }, it.label);
      })),
      items.map(function (it, i) {
        return h("div", { key: i, role: "tabpanel", id: base + "p" + i, "aria-labelledby": base + "t" + i, className: "md-tabs__panel", hidden: i !== active, tabIndex: 0 }, it.content);
      }));
  }

  function Overlay(props) {
    useEscape(props.open, props.onClose);
    if (!props.open) return null;
    return h("div", { className: cx("md-overlay", props.center && "md-overlay--center"), onMouseDown: function (e) { if (e.target === e.currentTarget && props.onClose) props.onClose(); } }, props.children);
  }

  function Dialog(props) {
    var id = useId();
    return h(Overlay, { open: props.open, onClose: props.onClose, center: true },
      h("div", { role: "dialog", "aria-modal": "true", "aria-labelledby": id, className: cx("md-dialog", props.className) },
        h("button", { type: "button", className: "md-close", "aria-label": "Schließen", onClick: props.onClose }, "×"),
        h("h2", { id: id, className: "md-dialog__title" }, props.title),
        props.children));
  }

  function Sheet(props) {
    var id = useId();
    var links = props.links;
    return h(Overlay, { open: props.open, onClose: props.onClose },
      h("div", { role: "dialog", "aria-modal": "true", "aria-labelledby": id, className: cx("md-sheet", props.side === "left" && "md-sheet--left", props.className) },
        h("button", { type: "button", className: "md-close", "aria-label": "Menü schließen", onClick: props.onClose }, "×"),
        h("h2", { id: id, className: "md-sheet__title" }, props.title || "Menü"),
        links ? h("ul", { className: "md-sheet__links" }, links.map(function (l) { return h("li", { key: l.label }, h("a", { href: l.href || "#" }, l.label)); })) : null,
        props.children));
  }

  function Field(props) {
    var autoId = useId();
    var id = props.id || autoId;
    var rest = omit(props, ["label", "hint", "error", "multiline", "className", "id"]);
    var describedBy = cx(props.hint && id + "-hint", props.error && id + "-err") || undefined;
    var control = h(props.multiline ? "textarea" : "input", Object.assign({}, rest, { id: id, className: "md-field__control", "aria-invalid": props.error ? "true" : undefined, "aria-describedby": describedBy }));
    return h("div", { className: cx("md-field", props.error && "md-field--error", props.className) },
      h("label", { className: "md-field__label", htmlFor: id }, props.label),
      control,
      props.hint ? h("span", { id: id + "-hint", className: "md-field__hint" }, props.hint) : null,
      props.error ? h("span", { id: id + "-err", className: "md-field__error", role: "alert" }, props.error) : null);
  }

  function Switch(props) {
    var c = useControlled(props.checked, !!props.defaultChecked);
    var on = c[0], set = c[1];
    var id = useId();
    function toggle() { set(!on); if (props.onChange) props.onChange(!on); }
    return h("span", { className: cx("md-switch", props.className) },
      props.offLabel ? h("span", { "aria-hidden": "true" }, props.offLabel) : null,
      h("button", { type: "button", role: "switch", "aria-checked": on ? "true" : "false", "aria-labelledby": id, className: "md-switch__btn", onClick: toggle }),
      h("span", { id: id }, props.label));
  }

  function Tooltip(props) {
    var st = useState(false), show = st[0], setShow = st[1];
    var id = useId();
    useEscape(show, function () { setShow(false); });
    var child = props.children;
    var trigger = React.isValidElement(child)
      ? React.cloneElement(child, { "aria-describedby": id, onFocus: function () { setShow(true); }, onBlur: function () { setShow(false); } })
      : h("span", { className: "md-term", tabIndex: 0, "aria-describedby": id, onFocus: function () { setShow(true); }, onBlur: function () { setShow(false); } }, child);
    return h("span", { className: cx("md-tip", props.className), onMouseEnter: function () { setShow(true); }, onMouseLeave: function () { setShow(false); } },
      trigger,
      h("span", { role: "tooltip", id: id, className: "md-tip__content", hidden: !(show || props.open) }, props.content));
  }

  function Toast(props) {
    var tone = props.tone || "success";
    useEffect(function () {
      if (!props.open || !props.duration || !props.onClose) return undefined;
      var t = setTimeout(props.onClose, props.duration);
      return function () { clearTimeout(t); };
    }, [props.open, props.duration, props.onClose]);
    if (!props.open) return null;
    var glyph = tone === "error" ? "!" : tone === "info" ? "i" : "✓";
    return h("div", { role: tone === "error" ? "alert" : "status", "aria-live": tone === "error" ? "assertive" : "polite", className: cx("md-toast", "md-toast--" + tone, props.floating !== false && "md-toast--floating", props.className) },
      h("span", { className: "md-toast__dot", "aria-hidden": "true" }, glyph),
      h("div", null, h("p", { className: "md-toast__title" }, props.title), props.children ? h("p", { className: "md-toast__text" }, props.children) : null),
      props.onClose ? h("button", { type: "button", className: "md-toast__close", "aria-label": "Hinweis schließen", onClick: props.onClose }, "×") : null);
  }

  var api = { Icon: Icon, Button: Button, SectionLabel: SectionLabel, Highlight: Highlight, SectionHeader: SectionHeader, NavBar: NavBar, EmailCapture: EmailCapture, Checkbox: Checkbox, StatusChip: StatusChip, Stat: Stat, FeatureGrid: FeatureGrid, FeatureCard: FeatureCard, WidgetLanguages: WidgetLanguages, WidgetStatus: WidgetStatus, WidgetChart: WidgetChart, WidgetChecklist: WidgetChecklist, Testimonial: Testimonial, Step: Step, Badge: Badge, Divider: Divider, LogoMarquee: LogoMarquee, Accordion: Accordion, Tabs: Tabs, Sheet: Sheet, Dialog: Dialog, Field: Field, Switch: Switch, Tooltip: Tooltip, Toast: Toast };
  window.Madita = Object.assign(window.Madita || {}, api);
})();
