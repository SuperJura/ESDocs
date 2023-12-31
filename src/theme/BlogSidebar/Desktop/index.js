import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';
export default function BlogSidebarDesktop({ sidebar }) {
  return (
    <aside className="col col--3">
      <nav className={clsx(styles.sidebar, 'thin-scrollbar')}>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          Blog Controls
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          <li>
            <a href="/blog" className={styles.sidebarItemLink}>Blog Home</a>
          </li>
          <li>
            <a href="/blog/tags" className={styles.sidebarItemLink}>Tags</a>
          </li>
        </ul>

        <hr />

        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
