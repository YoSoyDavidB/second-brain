import { useEffect, useState } from "react";
import supabase from "../helper/supabaseClient";
import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      // !!null => false
      // !!{} => true
      setAuthenticated(!!session);
      setLoading(false);
    };

    getSession();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    if (authenticated) {
      return <>{children}</>;
    }
    return <Navigate to="/login" />;
  }
}

export default Wrapper;
