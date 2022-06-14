import React,{useContext} from "react";
import styles from "./ListItem.module.css";
import { useAuth } from "../../contexts/Authcontext";
import { PrivateListContext } from "../../contexts/Authcontext";
import { setdelete } from "../../actions/deletePrivateItem";
export const ListItem = (props) => {

  const { currentUser } = useAuth();    
  const { deleteItem, dispatchDelete } = useContext(PrivateListContext);

  const removefromprivate = async () => {
    const res = await fetch(
      `https://movielb.herokuapp.com/removeFromPrivate/${currentUser.uid}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + currentUser.accessToken,
        },
        mode: "cors",
        body: JSON.stringify({
          Title: props.item.Title,
          Year: props.item.Year,
          imdbID: props.item.imdbID,
          Type: props.item.Type,
          Poster: props.item.Poster,
        }),
      }
    );
    dispatchDelete(setdelete());
  };
  return (
    <>
      <div className={styles.body}>
        <div className={` ${styles.inner} ${styles.col}`}>
          <div className={styles.row}>
            <div className={styles.box1}>
              <img className={styles.img} src={props.item.Poster} />
            </div>
            <div className={`${styles.box2} space-y-1`}>
              <h3 className={styles.txt}>
                <span>Title:{props.item.Title}</span>
              </h3>
              <h3 className={styles.txt}>
                <span>Year: {props.item.Year}</span>
              </h3>
              <div className={styles.txt}>
                <span>imdbID: {props.item.imdbID}</span>
              </div>
            </div>
          </div>
          <div className={styles.last}>
            <div className="flex space-x-1 items-center">
              <button
                className={styles.button}
                onClick={removefromprivate}
              >
                -Remove from the list
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
