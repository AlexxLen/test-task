import React from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { IBrigade } from '../../models/IBrigade.ts';
import BrigadeCard from '../brigadeCard/index.tsx';
import styles from './BrigadesList.module.css';

type BrigadesListProps = {
  items: IBrigade[];
};

const BrigadesList: React.FC<BrigadesListProps> = ({ items }) => {
  return (
    <VirtuosoGrid
      className={styles.root}
      useWindowScroll
      totalCount={items.length}
      itemContent={(index) => (
        <div className={styles.gridItem}>
          <BrigadeCard brigade={items[index]} />
        </div>
      )}
      listClassName={styles.gridList}
    />
  );
};

export default BrigadesList;
