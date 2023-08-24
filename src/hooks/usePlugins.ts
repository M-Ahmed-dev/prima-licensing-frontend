import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BASE_URL } from '../constants';
import {
  Plugin,
  UpdatePluginPayload,
} from '../types/plugins';

export const usePlugins = () => {
  return useQuery<Plugin[], Error>(['plugins'], async () => {
    const response = await fetch(`${BASE_URL}/plugins/`, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0MDc1NDkxLCJpYXQiOjE2OTI3Nzk0OTEsImp0aSI6IjU2YWYxYzA5ODFiNzRkYjA5YzdjOTAzODQyYTE4YjU0IiwidXNlcl9pZCI6MX0.Rcgj-YaYusbw5pmaFilWOybU7fLcHVJCeaJZF7op3-A',
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};

export const useAddPlugin = () => {
  const queryClient = useQueryClient();

  return useMutation<Plugin, Error, FormData>(
    ['add-plugin'],
    async (formData: FormData) => {
      const response = await fetch(`${BASE_URL}/plugins/`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Error in creating Plugin.');
      }
      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['plugins']);
      },
      onError: () => {
        throw new Error('Error in creating plugin');
      },
    }
  );
};

export const useUpdatePlugin = () => {
  const queryClient = useQueryClient();

  return useMutation<Plugin, Error, UpdatePluginPayload>(
    ['update-plugin'],
    async (variables: UpdatePluginPayload) => {
      const response = await fetch(`${BASE_URL}/plugins/${variables.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(variables),
      });
      if (!response.ok) {
        throw new Error('Error in creating Plugin.');
      }
      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['plugins']);
      },
      onError: () => {
        throw new Error('Error in creating plugin');
      },
    }
  );
}
