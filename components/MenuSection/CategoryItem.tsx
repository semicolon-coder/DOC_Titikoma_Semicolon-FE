import React, { useState } from 'react';
import cx from 'classnames';

interface CategoryItemProps {
  categoryId: string;
  name: string;
  active?: boolean;
  onButtonClick: () => void;
}

function CategoryItem(props: Partial<CategoryItemProps>) {
  const {
    categoryId, name, active, onButtonClick,
  } = props;
  const classsNames = cx({
    'bg-primary': active,
    'text-white': active,
    'text-secondary': !active,
    border: true,
    'rounded-full': true,
    'px-6': true,
    'py-2': true,
    transition: true,
    'duration-300': true,
    'hover:bg-primary': true,
    'hover:text-white': true,
    'hover:shadow-lg': true,
  });
  return (
    <div className={classsNames}>
      <button type="button" id={categoryId} onClick={onButtonClick}>
        <a>{name}</a>
      </button>
    </div>
  );
}

export default CategoryItem;
