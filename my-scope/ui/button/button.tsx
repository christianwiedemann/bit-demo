import React from 'react';

const button =  require('./button.twig');

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Button({ text }: ButtonProps) {
  return (
    <div>
      {button.default}
    </div>
  );
}
