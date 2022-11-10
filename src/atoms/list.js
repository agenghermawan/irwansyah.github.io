import React from "react";

export default function List(props) {
  const { href, children, className } = props;
  return (
    <li>
      <a href={href} className={className}>
        {children}
      </a>
    </li>
  );
}
