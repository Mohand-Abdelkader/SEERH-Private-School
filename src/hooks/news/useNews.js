import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../services/servicesApi";
export function useNews() {
  const { data: news, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  return { news, isLoading };
}
