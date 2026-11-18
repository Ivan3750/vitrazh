// Обгортка: 3D-нахил за курсором (керується Effects, тільки на пристроях із мишею)
export default function Tilt({ as: Tag = "div", className = "", children, ...rest }) {
  return <Tag data-tilt className={className} {...rest}>{children}</Tag>;
}
