export interface Plugin {
  id: number;
  plugin_name: string;
  plugin_slug: string;
  plugin_description: string;
  status: string;
  is_active: boolean;
  latest_version: string;
  is_trash: boolean;
  created_at: string;
  updated_at: string;
}
// Payload creation type
export type PluginPayload = Omit<
  Partial<Plugin>,
  'id' | 'status' | 'is_trash' | 'created_at' | 'updated_at'
> & { file: File | null };

export type UpdatePluginPayload = Pick<
  Partial<Plugin>,
  | 'id'
  | 'plugin_name'
  | 'plugin_slug'
  | 'plugin_description'
  | 'is_trash'
  | 'is_active'
  | 'status'
>;

export type UploadPluginVariables = {
  pluginName: string;
  pluginFile: File;
};
