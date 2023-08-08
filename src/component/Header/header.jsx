import styles from './header.module.css';
import { SiAddthis } from 'react-icons/si';
import { useState } from 'react';

export function Header({ onAddTask }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        setTitle('');
        onAddTask(title)
    }
    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <h1>ToDo App </h1>
            <middle className={styles.middle}>
                <h2>you want to do everything that you write!</h2>
            </middle>

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
                <button><SiAddthis size={30} /> </button>
            </form>
        </header>
    )
}




