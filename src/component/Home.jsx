import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieComponent from "./ContactComponent";

const Home = () => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    const getContactsData = async () => {
        await fetch(`https://randomuser.me/api/?results=10`)
            .then((response) => response.json())
            .then((data) => {
                const results = data.results.map((user, index) => ({
                    id: page * 10 + index,
                    name: `${user.name.first} ${user.name.last}`,
                    image: user.picture.large
                }));
                console.log(results); 
                setContacts((prev) => [...prev, ...results]);
                setLoading(false);
            })
            .catch((error) => console.error(error));

    };

    useEffect(() => {
        getContactsData();
    }, [page]);

    const handelInfiniteScroll = async () => {
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                setLoading(true);
                setPage((prev) => prev + 1)
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);


    return (
        <>
            <MovieComponent movieInfo={contacts} />
            {loading && <Loading />}
        </>
    );
};

export default Home;