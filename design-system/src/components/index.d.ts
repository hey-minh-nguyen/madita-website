import type * as React from 'react';

/* ---------- Icons: Phosphor Regular (MIT) ---------- */
export type IconName = 'arrow-right' | 'arrow-left' | 'arrow-down' | 'arrow-up-right' | 'caret-down' | 'caret-right' | 'check' | 'check-circle' | 'x' | 'x-circle' | 'plus' | 'minus' | 'list' | 'magnifying-glass' | 'play' | 'pause' | 'speaker-high' | 'speaker-slash' | 'microphone' | 'headset' | 'phone' | 'chat-circle-text' | 'envelope-simple' | 'calendar-blank' | 'clock' | 'globe' | 'translate' | 'users' | 'user-circle' | 'buildings' | 'briefcase' | 'handshake' | 'trend-up' | 'chart-bar' | 'squares-four' | 'plugs-connected' | 'shield-check' | 'lock-simple' | 'file-text' | 'download-simple' | 'link' | 'info' | 'warning' | 'star' | 'quotes' | 'map-pin' | 'lightning' | 'eye';
export interface IconProps { name: IconName; /** Standard var(--icon-size) = 18px */ size?: number | string; /** gesetzt → role="img" mit Label, sonst aria-hidden */ label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement | null;

/* ---------- Quelle: Figma ---------- */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = indigo (Standard-CTA), dark = grey (Header-CTA), accent = lime (CTA auf indigo), inverse = weiß (CTA auf Akzentkacheln), outline = Rahmen grey (Sekundär) */
  variant?: 'primary' | 'dark' | 'accent' | 'inverse' | 'outline';
  /** md = 44px (auch mit Icon), nav = 40px (Menüleiste), xs = 28px */
  size?: 'md' | 'nav' | 'xs';
  /** Icon rechts im Button: 'arrow' (= arrow-right) oder ein IconName */
  icon?: 'arrow' | IconName;
  /** gesetzt → rendert <a> */
  href?: string;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface SectionLabelProps { tone?: 'brand' | 'accent'; className?: string; children?: React.ReactNode }
export declare function SectionLabel(props: SectionLabelProps): React.ReactElement;

export interface HighlightProps { className?: string; children?: React.ReactNode }
export declare function Highlight(props: HighlightProps): React.ReactElement;

export interface SectionHeaderProps {
  label?: React.ReactNode;
  labelTone?: 'brand' | 'accent';
  /** darf <Highlight> enthalten */
  title: React.ReactNode;
  /** Lead-Text */
  children?: React.ReactNode;
  align?: 'center' | 'left';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}
export declare function SectionHeader(props: SectionHeaderProps): React.ReactElement;

export interface NavLink { label: string; href?: string }
export interface NavBarProps {
  links?: NavLink[];
  /** URL zu madita-logo-grey.svg (mit indigo „.ai“) */
  logoSrc?: string;
  homeHref?: string;
  loginLabel?: string;
  /** null blendet den Anmelden-Link aus */
  loginHref?: string | null;
  ctaLabel?: string;
  ctaHref?: string;
  /** öffnet unter 960px das Sheet */
  onMenu?: () => void;
  /** blendet die Leiste beim Runterscrollen aus und beim Hochscrollen bzw. Hover am oberen Rand (Desktop) wieder ein. Standard true */
  autoHide?: boolean;
  /** position: sticky am oberen Rand */
  sticky?: boolean;
  className?: string;
}
export declare function NavBar(props: NavBarProps): React.ReactElement;

export interface EmailCaptureProps {
  /** light = weißes Feld (auf indigo), dark = grey-Feld (Newsletter-Leiste) */
  tone?: 'light' | 'dark';
  label?: string;
  placeholder?: string;
  buttonLabel?: string;
  buttonVariant?: ButtonProps['variant'];
  onSubmit?: (email: string) => void;
  className?: string;
}
export declare function EmailCapture(props: EmailCaptureProps): React.ReactElement;

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: React.ReactNode }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;

export interface StatusChipProps { label: React.ReactNode; value?: React.ReactNode; tone?: 'neutral' | 'success'; className?: string }
export declare function StatusChip(props: StatusChipProps): React.ReactElement;

export interface StatProps { value: React.ReactNode; label: React.ReactNode; className?: string }
export declare function Stat(props: StatProps): React.ReactElement;

export interface FeatureGridProps { /** bis zu fünf FeatureCards */ children?: React.ReactNode; className?: string }
export declare function FeatureGrid(props: FeatureGridProps): React.ReactElement;

export interface FeatureCardProps {
  /** Akzentfarbe der Karte; benachbarte Karten verschieden. indigo = CTA-Karte ohne Widget */
  tone?: 'lime' | 'apple' | 'mint' | 'turquoise' | 'sky-blue' | 'indigo';
  title: React.ReactNode;
  /** ein Satz unter dem Titel */
  children?: React.ReactNode;
  /** ein Widget: WidgetLanguages, WidgetStatus, WidgetChart oder WidgetChecklist. Weglassen = CTA-Karte */
  widget?: React.ReactNode;
  /** z. B. <Button variant="inverse"> – nur in der CTA-Karte */
  action?: React.ReactNode;
  as?: 'h2' | 'h3' | 'h4';
  className?: string;
}
export declare function FeatureCard(props: FeatureCardProps): React.ReactElement;

export interface WidgetLanguagesProps { /** Begrüßungen, laufen endlos nach oben */ words?: string[]; duration?: number; label?: string }
export declare function WidgetLanguages(props: WidgetLanguagesProps): React.ReactElement;

export interface WidgetStatusItem { label: React.ReactNode; value?: React.ReactNode; tone?: 'neutral' | 'success' }
export interface WidgetStatusProps { label?: React.ReactNode; /** pulsierender Online-Punkt, Standard true */ live?: boolean; /** max. 3 */ items: WidgetStatusItem[] }
export declare function WidgetStatus(props: WidgetStatusProps): React.ReactElement;

export interface WidgetChartProps { label?: React.ReactNode; /** 5–7 Werte, letzter = aktuell */ values?: number[]; /** wie viele der letzten Balken voll indigo sind, Standard 2 */ highlight?: number; /** Alternativtext */ description?: string }
export declare function WidgetChart(props: WidgetChartProps): React.ReactElement;

export interface WidgetChecklistProps { label?: React.ReactNode; /** max. 4 */ items: Array<string | { label: React.ReactNode; value?: React.ReactNode }>; value?: React.ReactNode }
export declare function WidgetChecklist(props: WidgetChecklistProps): React.ReactElement;

export interface TestimonialProps { quote: React.ReactNode; author?: React.ReactNode; role?: React.ReactNode; className?: string }
export declare function Testimonial(props: TestimonialProps): React.ReactElement;

export interface StepProps { number?: number | string; title: React.ReactNode; children?: React.ReactNode; active?: boolean; className?: string }
export declare function Step(props: StepProps): React.ReactElement;

export interface BadgeProps { tone?: 'dark' | 'brand' | 'light'; className?: string; children?: React.ReactNode }
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface DividerProps { className?: string }
export declare function Divider(props: DividerProps): React.ReactElement;

export interface LogoMarqueeProps { /** je Logo ein <img> */ children?: React.ReactNode; /** Sekunden pro Durchlauf (bei rows > 1 je Reihe leicht versetzt) */ duration?: number; /** 1 (Kundenlogos) oder 3 (ATS-Liste): Drittel je Reihe, Reihe 1 und 3 laufen nach rechts, Reihe 2 nach links */ rows?: 1 | 2 | 3; label?: string; className?: string }
export declare function LogoMarquee(props: LogoMarqueeProps): React.ReactElement;

/* ---------- Ergänzungen (shadcn-inspiriert) ---------- */
export interface AccordionItem { title: React.ReactNode; content: React.ReactNode }
export interface AccordionProps { items: AccordionItem[]; defaultOpen?: number; multiple?: boolean; className?: string }
export declare function Accordion(props: AccordionProps): React.ReactElement;

export interface TabItem { label: React.ReactNode; content: React.ReactNode }
export interface TabsProps { items: TabItem[]; value?: number; defaultValue?: number; onChange?: (index: number) => void; label?: string; className?: string }
export declare function Tabs(props: TabsProps): React.ReactElement;

export interface SheetProps { open: boolean; onClose: () => void; title?: React.ReactNode; links?: NavLink[]; side?: 'right' | 'left'; children?: React.ReactNode; className?: string }
export declare function Sheet(props: SheetProps): React.ReactElement | null;

export interface DialogProps { open: boolean; onClose: () => void; title: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function Dialog(props: DialogProps): React.ReactElement | null;

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  label: React.ReactNode;
  hint?: React.ReactNode;
  /** Fehlermeldung als Text – Farbe allein reicht nicht */
  error?: React.ReactNode;
  multiline?: boolean;
}
export declare function Field(props: FieldProps): React.ReactElement;

export interface SwitchProps { label: React.ReactNode; offLabel?: React.ReactNode; checked?: boolean; defaultChecked?: boolean; onChange?: (checked: boolean) => void; className?: string }
export declare function Switch(props: SwitchProps): React.ReactElement;

export interface TooltipProps { content: React.ReactNode; /** Element oder Begriff (wird fokussierbar) */ children: React.ReactNode; open?: boolean; className?: string }
export declare function Tooltip(props: TooltipProps): React.ReactElement;

export interface ToastProps { open: boolean; tone?: 'success' | 'error' | 'info'; title: React.ReactNode; children?: React.ReactNode; onClose?: () => void; duration?: number; floating?: boolean; className?: string }
export declare function Toast(props: ToastProps): React.ReactElement | null;

declare global {
  interface Window {
    Madita: {
      Icon: typeof Icon; Button: typeof Button; SectionLabel: typeof SectionLabel; Highlight: typeof Highlight; SectionHeader: typeof SectionHeader;
      NavBar: typeof NavBar; EmailCapture: typeof EmailCapture; Checkbox: typeof Checkbox; StatusChip: typeof StatusChip;
      Stat: typeof Stat; FeatureGrid: typeof FeatureGrid; FeatureCard: typeof FeatureCard; WidgetLanguages: typeof WidgetLanguages;
      WidgetStatus: typeof WidgetStatus; WidgetChart: typeof WidgetChart; WidgetChecklist: typeof WidgetChecklist; Testimonial: typeof Testimonial; Step: typeof Step; Badge: typeof Badge;
      Divider: typeof Divider; LogoMarquee: typeof LogoMarquee; Accordion: typeof Accordion; Tabs: typeof Tabs; Sheet: typeof Sheet;
      Dialog: typeof Dialog; Field: typeof Field; Switch: typeof Switch; Tooltip: typeof Tooltip; Toast: typeof Toast;
    };
  }
}
