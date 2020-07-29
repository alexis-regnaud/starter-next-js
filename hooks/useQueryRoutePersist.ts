import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

function useQueryRoutePersist() {
  const { query, pathname } = useRouter();
  const [queryPersist, setQueryPersist] = useState<ParsedUrlQuery>(query);
  const [prevPathName, SetPrevPathName] = useState("");

  useEffect(() => {
    if (Object.keys(queryPersist).length === 0 || prevPathName === pathname) {
      setQueryPersist(query);
    }

    SetPrevPathName(pathname);
  }, [query, pathname]);

  return queryPersist;
}

export default useQueryRoutePersist;
