import NextLink, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface MyLinkProps extends LinkProps {
  children: ReactNode;
  className: any;
}

const Link = ({ href, children, className, ...props }: MyLinkProps) => {
  return (
    <NextLink href={href} {...props} legacyBehavior>
      <a className={className}> {children}</a>
    </NextLink>
  );
};

export default Link;
