
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Plugin, PluginPayload } from "../types/plugins";
import { BASE_URL } from "../constants";

export const usePlugins = () => {
  return useQuery<Plugin[], Error>(
    ["plugins"],
    async () => {
      const response = await fetch(
        `${BASE_URL}/plugins/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0MDc1NDkxLCJpYXQiOjE2OTI3Nzk0OTEsImp0aSI6IjU2YWYxYzA5ODFiNzRkYjA5YzdjOTAzODQyYTE4YjU0IiwidXNlcl9pZCI6MX0.Rcgj-YaYusbw5pmaFilWOybU7fLcHVJCeaJZF7op3-A`
          }
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    }
  );
};

export const useAddPlugin = () => {
  const queryClient = useQueryClient();

  return useMutation<Plugin, Error, PluginPayload>(['add-plugin'],
    async (variables: PluginPayload) => {
      const response = await fetch(`${BASE_URL}/plugins/`, {
        method: "POST",
        headers: {
          // Authorization: `Bearer ${getAccessToken()}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(variables)
      });
      if (!response.ok) {
        throw new Error("Error in creating order.");
      }
      return response.json();
    },
    {
      onSuccess: data => {
        queryClient.invalidateQueries(['plugins']);
      },
      onError: () => {
        console.log(
          "Error in creating order. Customer might not have billing and shipping contacts."
        );
      }
    }
  );
};