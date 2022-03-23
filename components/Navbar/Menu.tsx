import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

function Menu(props: Partial<MenuProps>) {
  const { title, active, href = '/' } = props;
  const className = cx({
    'text-white': true,
    'text-center': true,
    'hover:border-b': !active,
    'border-b': active,
  });

  return (
    <div className="h-auto mx-5 flex flex-col justify-center">
      <h1 className={className}>
        <Link href={href}>
          <a>{title}</a>
        </Link>
      </h1>
    </div>
  );
}

export default Menu;
