import styles from "./MainPage.module.scss";
import React, { useState } from "react";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/slices/testSlice";

export const MainPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.items);

  const [removingId, setRemovingId] = useState<number | null>(null);

  const handleAdd = () => {
    dispatch(addItem());
  };

  const handleRemove = (id: number) => {
    setRemovingId(id);
    setTimeout(() => {
      dispatch(removeItem());
      setRemovingId(null);
    }, 500);
  };

  return (
    <div className={styles.root}>
      <h1>Random Color Items</h1>
      <div className={styles.wrapperButton}>
        <button onClick={handleAdd} className={styles.button}>
          Add
        </button>
        <button
          onClick={() => handleRemove(items[items.length - 1].id)}
          disabled={items.length === 0}
          className={styles.button}
        >
          Remove
        </button>
      </div>

      <div className={styles.squareList}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.square} ${styles.fadeIn} ${
              removingId === item.id ? styles.fadeOut : ""
            }`}
            style={{ backgroundColor: item.color }}
          />
        ))}
      </div>
    </div>
  );
};
