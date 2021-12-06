import styles from './style.module.css';

function Profile(props) {
    return <div className={styles.userCard}>
        <img src= {props.avatar} alt="user avatar" className={styles.avatar}/>
        <h3>{props.username}</h3>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
        <div className={styles.container}>
        <div className={styles.stats}>
            <div className={styles.followers}>
                <p>Followers</p>
                <h4>{props.stats.followers}</h4>
            </div>
            <div className="views">
                <p>Views</p>
                <h4>{props.stats.views}</h4>
            </div>
            <div className="likes">
                <p>Likes</p>
                <h4>{props.stats.likes}</h4>
            </div>
        </div>
        </div>
    </div>
}
export default Profile;