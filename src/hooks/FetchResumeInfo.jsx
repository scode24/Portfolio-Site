import axios from "axios";
import { useEffect, useState } from "react";

const useFetchResumeInfo = () => {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("resume.json");
      setResume(response.data);
    } catch (error) {
      console.error("Error fetching resume:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { resume, loading };
};

export default useFetchResumeInfo;
