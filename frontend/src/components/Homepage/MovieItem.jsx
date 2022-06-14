import React,{useState} from "react";
import styles from "./MovieItem.module.css";
import { useAuth } from "../../contexts/Authcontext";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Loading } from "../../assets/loading.svg";
export const MovieItem = (props) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [isloading, setLoading] = useState(true)
    const AddToPublic = async () => {
        try {
            const res = await fetch(
                `https://movielb.herokuapp.com/addToPublic/${currentUser.uid}`,
                {
                    method: "POST",
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
            alert("added sucsessfully")
        } catch (err) {
            alert("No Movie added");
        }
    };

    const AddToPrivate = async () => {
        try {
            const res = await fetch(
                `https://movielb.herokuapp.com/addToPrivate/${currentUser.uid}`,
                {
                    method: "POST",
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
            alert("added sucsessfully")
        }catch(err){
            alert("No Movie added")
        }
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
                            <button className={styles.button} onClick={AddToPublic}>
                                +Add to playlist(public)
                            </button>
                            <button className={styles.button} onClick={AddToPrivate}>
                                +Add to playlist(Private)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
