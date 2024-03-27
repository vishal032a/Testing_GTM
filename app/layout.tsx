import '@/styles/global.css';
import Nav from '@components/nav';
import Provider from '@components/Provider';
import { FC, ReactNode } from 'react';
export const metadata = {
  title: 'promptopia',
  description: 'Discover and share AI Prompts',
};

const RootLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <html lang="en">
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <Nav />
        {children}
      </main>
    </html>
  );
};

export default RootLayout;
