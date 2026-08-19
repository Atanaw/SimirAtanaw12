/* @ds-bundle: {"format":4,"namespace":"MeridianPortfolioDesignSystem_cc5733","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Avatar","sourcePath":"components/navigation/Avatar.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"3178e98d8a9d","components/core/Button.jsx":"79b52de1982c","components/core/Card.jsx":"48770ed57101","components/core/Icon.jsx":"a73e37bf3d0b","components/core/StatCard.jsx":"7b569d53b01f","components/forms/Input.jsx":"3ae55ad03dc7","components/navigation/Avatar.jsx":"f297ddc3e674","components/navigation/NavLink.jsx":"8cad40ecc961","ui_kits/portfolio/AboutScreen.jsx":"1194a1e53c58","ui_kits/portfolio/ContactScreen.jsx":"db5b9ab28922","ui_kits/portfolio/HomeScreen.jsx":"373d76e84d83","ui_kits/portfolio/ProjectDetailScreen.jsx":"33d4201b1ba2","ui_kits/portfolio/ProjectsScreen.jsx":"82037b05f277","ui_kits/portfolio/Shell.jsx":"3fb4e8b57d8c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MeridianPortfolioDesignSystem_cc5733 = window.MeridianPortfolioDesignSystem_cc5733 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--color-surface-sunken)',
      color: 'var(--color-text-muted)'
    },
    primary: {
      background: 'var(--color-primary-tint)',
      color: 'var(--color-primary)'
    },
    accent: {
      background: 'var(--color-accent-tint)',
      color: 'var(--color-accent)'
    },
    success: {
      background: 'var(--color-primary-tint)',
      color: 'var(--color-success)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption-size)',
      fontWeight: 'var(--text-caption-weight)',
      letterSpacing: 'var(--text-caption-tracking)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      display: 'inline-block',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 'var(--space-4)',
  hoverable = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'all var(--duration-base) var(--ease-standard)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    function render() {
      if (window.lucide && ref.current) {
        ref.current.innerHTML = '';
        const el = document.createElement('i');
        el.setAttribute('data-lucide', name);
        ref.current.appendChild(el);
        window.lucide.createIcons({
          attrs: {
            width: size,
            height: size,
            color,
            'stroke-width': strokeWidth
          },
          nameAttr: 'data-lucide'
        });
      }
    }
    if (!window.lucide) {
      const existing = document.querySelector('script[data-lucide-cdn]');
      if (existing) existing.addEventListener('load', render);else {
        const s = document.createElement('script');
        s.src = 'https://unpkg.com/lucide@latest';
        s.setAttribute('data-lucide-cdn', 'true');
        s.onload = render;
        document.head.appendChild(s);
      }
    } else render();
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: {
      padding: '6px 14px',
      fontSize: '0.8125rem',
      gap: 6,
      height: 32
    },
    md: {
      padding: '10px 20px',
      fontSize: '0.9375rem',
      gap: 8,
      height: 40
    },
    lg: {
      padding: '14px 28px',
      fontSize: '1rem',
      gap: 10,
      height: 48
    }
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: '#fff',
      border: '1px solid transparent'
    },
    secondary: {
      background: hover && !disabled ? 'var(--color-primary-tint)' : 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-border-strong)'
    },
    ghost: {
      background: hover && !disabled ? 'var(--color-surface-sunken)' : 'transparent',
      color: 'var(--color-text-primary)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: sizes[size].gap,
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      opacity: disabled ? 0.5 : 1,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  trend,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption-size)',
      fontWeight: 'var(--text-caption-weight)',
      letterSpacing: 'var(--text-caption-tracking)',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '2rem',
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, value), trend && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      color: trend.startsWith('-') ? 'var(--color-danger)' : 'var(--color-success)'
    }
  }, trend));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  multiline = false
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      fontWeight: 500,
      color: 'var(--color-text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    rows: multiline ? 4 : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'inherit',
      fontSize: 'var(--text-body-size)',
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (focus ? 'var(--color-primary)' : 'var(--color-border-strong)'),
      background: 'var(--color-surface)',
      color: 'var(--color-text-primary)',
      outline: focus ? '2px solid var(--color-primary-tint)' : 'none',
      transition: 'border var(--duration-fast) var(--ease-standard)',
      resize: multiline ? 'vertical' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Avatar.jsx
try { (() => {
function Avatar({
  initials = '',
  size = 40,
  src
}) {
  return src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    style: {
      borderRadius: 'var(--radius-full)',
      objectFit: 'cover'
    },
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-primary-tint)',
      color: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: size * 0.38
    }
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function NavLink({
  children,
  active = false,
  href = '#',
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      fontWeight: 500,
      color: active ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
      textDecoration: 'none',
      padding: '6px 2px',
      borderBottom: active ? '2px solid var(--color-primary)' : '2px solid transparent',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
function AboutScreen() {
  const {
    Avatar,
    Badge,
    StatCard
  } = window.MeridianDS;
  const skills = ['Python', 'React', 'SQL', 'Figma', 'D3.js', 'TypeScript'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 48px',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AM",
    size: 96
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1.25rem',
      color: 'var(--color-text-primary)'
    }
  }, "Alex Morgan"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '0.9375rem'
    }
  }, "Product Designer & Data Analyst"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.0625rem',
      lineHeight: 1.7,
      color: 'var(--color-text-primary)',
      margin: '0 0 24px'
    }
  }, "I spend most days somewhere between a spreadsheet and a Figma file. I like interfaces that make numbers easy to trust, and I've spent the last seven years building them for research teams, startups, and the occasional nonprofit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, skills.map(s => /*#__PURE__*/React.createElement(Badge, {
    key: s,
    tone: "neutral"
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Years experience",
    value: "7",
    icon: "calendar"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Talks given",
    value: "14",
    icon: "mic"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Coffee, daily",
    value: "3 cups",
    icon: "coffee"
  }))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ContactScreen.jsx
try { (() => {
function ContactScreen() {
  const {
    Input,
    Button,
    Icon
  } = window.MeridianDS;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--text-h2-weight)',
      fontSize: 'var(--text-h2-size)',
      color: 'var(--color-text-primary)',
      margin: '0 0 12px'
    }
  }, "Let's talk"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-text-muted)',
      margin: '0 0 32px'
    }
  }, "Have a project in mind, or just want to say hi? Send a note."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: 'var(--color-primary-tint)',
      borderRadius: 'var(--radius-md)',
      color: 'var(--color-primary)',
      fontWeight: 600
    }
  }, "Thanks \u2014 I'll get back to you soon.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    multiline: true,
    placeholder: "Say hello..."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "send",
    iconPosition: "right",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Send message")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      marginTop: 48,
      paddingTop: 32,
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 20,
    color: "var(--color-text-muted)"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 20,
    color: "var(--color-text-muted)"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 20,
    color: "var(--color-text-muted)"
  })));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
function HomeScreen({
  onNav
}) {
  const {
    Button,
    StatCard,
    Badge,
    Icon
  } = window.MeridianDS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Available for freelance work"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--text-display-weight)',
      fontSize: 'var(--text-display-size)',
      lineHeight: 'var(--text-display-lh)',
      color: 'var(--color-text-primary)',
      margin: '20px 0 16px',
      maxWidth: 760
    }
  }, "Data-driven design, built to ship."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.125rem',
      color: 'var(--color-text-muted)',
      lineHeight: 1.6,
      maxWidth: 560,
      margin: '0 0 32px'
    }
  }, "I'm a product designer and analyst who turns messy data into clear, usable interfaces. Here's a look at recent work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrow-right",
    iconPosition: "right",
    onClick: () => onNav('Projects')
  }, "View projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    icon: "mail",
    onClick: () => onNav('Contact')
  }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Projects shipped",
    value: "42",
    trend: "+8 this year",
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Years experience",
    value: "7",
    icon: "calendar"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Datasets analyzed",
    value: "1.2k",
    trend: "+140 this year",
    icon: "database"
  })));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectDetailScreen.jsx
try { (() => {
function ProjectDetailScreen({
  project,
  onBack
}) {
  const {
    Button,
    Badge
  } = window.MeridianDS;
  if (!project) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-left",
    onClick: onBack,
    style: {
      marginBottom: 32,
      paddingLeft: 0
    }
  }, "Back to projects"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--text-h1-weight)',
      fontSize: 'var(--text-h1-size)',
      color: 'var(--color-text-primary)',
      margin: '0 0 16px'
    }
  }, project.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 24
    }
  }, project.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "primary"
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.0625rem',
      lineHeight: 1.7,
      color: 'var(--color-text-muted)'
    }
  }, project.summary, " Built end-to-end \u2014 data pipeline, backend API, and the front-end views shown here \u2014 with a focus on making dense information legible at a glance."));
}
window.ProjectDetailScreen = ProjectDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectsScreen.jsx
try { (() => {
const PROJECTS = [{
  id: 1,
  name: 'Churn prediction dashboard',
  summary: 'A model-monitoring dashboard surfacing churn risk to the CS team in real time.',
  tags: ['Python', 'React', 'D3']
}, {
  id: 2,
  name: 'Portfolio analytics API',
  summary: 'A public API that powers the stats on this very site.',
  tags: ['Node', 'Postgres']
}, {
  id: 3,
  name: 'Field survey toolkit',
  summary: 'Offline-first data collection app used across 6 countries.',
  tags: ['React Native', 'SQLite']
}, {
  id: 4,
  name: 'Design system audit',
  summary: 'A component-usage audit that cut a product\'s CSS bundle by 38%.',
  tags: ['Figma', 'CSS']
}];
function ProjectsScreen({
  onOpen
}) {
  const {
    Card,
    Badge
  } = window.MeridianDS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--text-h2-weight)',
      fontSize: 'var(--text-h2-size)',
      color: 'var(--color-text-primary)',
      margin: '0 0 40px'
    }
  }, "Selected projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--space-4)'
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    hoverable: true,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(p)
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '1.25rem',
      margin: '0 0 8px',
      color: 'var(--color-text-primary)'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      color: 'var(--color-text-muted)',
      fontSize: '0.9375rem',
      lineHeight: 1.55
    }
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "primary"
  }, t))))))));
}
window.ProjectsScreen = ProjectsScreen;
window.PROJECTS = PROJECTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Shell.jsx
try { (() => {
function Shell({
  active,
  onNav,
  children
}) {
  const {
    NavLink,
    Avatar,
    Button
  } = window.MeridianDS;
  const items = ['Home', 'Projects', 'About', 'Contact'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 48px',
      borderBottom: '1px solid var(--color-border)',
      background: 'var(--color-surface)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '1.1rem',
      color: 'var(--color-text-primary)'
    }
  }, "alex morgan"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, items.map(i => /*#__PURE__*/React.createElement(NavLink, {
    key: i,
    active: active === i,
    onClick: e => {
      e.preventDefault();
      onNav(i);
    }
  }, i))), /*#__PURE__*/React.createElement(Avatar, {
    initials: "AM",
    size: 36
  })), /*#__PURE__*/React.createElement("main", null, children));
}
window.Shell = Shell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.NavLink = __ds_scope.NavLink;

})();
