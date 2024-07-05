import { Card } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { IBrigade } from '../../models/IBrigade.ts';
import { selectConnections } from '../../store/connection/selectors.ts';
import { selectDepartments } from '../../store/department/selectors.ts';
import styles from './BrigadeCard.module.css';

type BrigadeCardProps = {
  brigade: IBrigade;
};

const BrigadeCard: React.FC<BrigadeCardProps> = ({ brigade }) => {
  const { items: departments } = useSelector(selectDepartments);
  const { items: connections } = useSelector(selectConnections);

  const departmentStr =
    departments.find((d) => d.id === brigade.department.id)?.name || 'Неизвестно';

  const connectionStr =
    connections.find((c) => c.connectionStateId === brigade.connectionStateId)?.name ||
    'Неизвестно';

  return (
    <Card
      className={styles.root}
      title={brigade.brigade_name}>
      <h3 className={styles.title}>{departmentStr}</h3>
      <p className={styles.text}>
        <b>Соединение: </b>
        {connectionStr}
      </p>
      <p className={styles.text}>
        <b>Кластер: </b>
        {brigade.position.cluster}
      </p>
      <p className={styles.text}>
        <b>Поле: </b>
        {brigade.position.field}
      </p>
      <p className={styles.text}>
        <b>Скважина: </b>
        {brigade.position.well}
      </p>
    </Card>
  );
};

export default BrigadeCard;
