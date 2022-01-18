import React from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="text-start">
      <TopBar />
      <div className="container-sm my-5" style={{ maxWidth: 500 }}>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
