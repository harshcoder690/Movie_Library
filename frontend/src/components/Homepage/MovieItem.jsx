import React from 'react'
import styles from "./MovieItem.module.css";
import { useAuth } from "../../contexts/Authcontext";
export const MovieItem = (props) =>{

    const {currentUser} = useAuth();
    //console.log(currentUser);

    const AddToPublic = async () =>{
        console.log(currentUser.accessToken);
        const res = await fetch(`http://localhost:5000/addToPublic/${currentUser.uid}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + currentUser.accessToken,
            },
            mode: "cors",
            body: JSON.stringify({
                Title: props.item.Title,
                Year : props.item.Year,
                imdbID: props.item.imdbID,
                Type: props.item.Type,
                Poster: props.item.Poster
            })
        });
    }

    const AddToPrivate = async () =>{
        console.log(currentUser.accessToken);
        const res = await fetch(`http://localhost:5000/addToPrivate/${currentUser.uid}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + currentUser.accessToken,
            },
            mode: "cors",
            body: JSON.stringify({
                Title: props.item.Title,
                Year : props.item.Year,
                imdbID: props.item.imdbID,
                Type: props.item.Type,
                Poster: props.item.Poster
            })
        });
    }
  return (
      <div className={styles.body}>
          <div className={` ${styles.inner} ${styles.column}`}>
              <div className={` ${styles.fcol} ${styles.column}`}>
                  <div className={styles.box1}>
                      <div className={styles.date}><img src ={props.item.Poster}/></div>
                  </div>
                  <div className={`${styles.box2} space-y-1`}>
                      <h3>
                          <span>
                           Title: {props.item.Title}
                          </span>
                      </h3>
                      <h3>
                          <span>
                          Year: {props.item.Year}
                          </span>
                      </h3>
                      <div>
                          <span>
                           imdbID: {props.item.imdbID}
                          </span>
                      </div>
                  </div>
              </div>
              <div className={` ${styles.fcol} ${styles.column} space-x-4`}>
                  <div className="flex space-x-1 items-center">
                          <button className={styles.button} onClick = {AddToPublic}>
                              +Add to playlist(public)
                          </button>
                          : 
                          <button className={styles.button} onClick = {AddToPrivate}>
                               +Add to playlist(Private)
                          </button>
                  </div>
              </div>
          </div>
      </div>
  );
}
