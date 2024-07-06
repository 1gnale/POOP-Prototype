import { useEffect, useState } from "react";
import { fetchPoem } from "../../util/fetchPoem";

const useGetPoems = () => {
    const [poem, setPoem] = useState([]);
    useEffect(() => {
        fetchPoem(setPoem);
    }, []);
    return poem;
}

export default useGetPoems;