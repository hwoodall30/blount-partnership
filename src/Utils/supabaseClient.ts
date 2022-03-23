// import { SUPABASE_KEY } from './env';
import { createClient } from '@supabase/supabase-js';
// import { variables } from '$lib/variables-env';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
	'https://sjmarmsfwdhjawbsoskq.supabase.co',

	import.meta.env['VITE_SUPABASE_KEY'] as string
);
