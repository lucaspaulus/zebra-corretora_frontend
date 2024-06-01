"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import MyCrypt from "@/utils/MyCrypt";

interface State {
    id: number;
    name: string;
}

export const Dropdown: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [data, setData] = useState<State[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:4000/states");
            const dataJson = await response.json();

            const decryptedData = dataJson.map(({ id, name }: State) => {
                const myCrypt = new MyCrypt(name);
                const dataDecrypted = myCrypt.decrypt();
                return { id, name: dataDecrypted };
            });
            setData(decryptedData);
        };
        fetchData();
    }, []);  

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        setShowDropdown(true)
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.dropdownField} onClick={() => setShowDropdown(!showDropdown)}>
                <label htmlFor="dropdown">Estados</label>
                <input
                    id="dropdown"
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                />
            </div>
            <div className={showDropdown ? styles.dropdownShow : styles.dropdownHide}>
                {filteredData.map((item) => (
                    <p
                        key={item.id}
                        onClick={() => {
                            setInput(item.name);
                            setShowDropdown(false);
                        }}
                        className={styles["item"]}
                    >
                        {item.name}
                    </p>
                ))}
            </div>
        </div>
    );
};
