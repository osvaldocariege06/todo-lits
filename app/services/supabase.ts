import "react-native-url-polyfill"
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://yymninmewjucvbzrmdpi.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5bW5pbm1ld2p1Y3ZienJtZHBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwMTEwODAsImV4cCI6MjAzMDU4NzA4MH0.0QpkpjfPZz-Mo_8Oar17LLnmUPFsRS88LauUBZerKMA"

export const supabase = createClient(supabaseUrl, supabaseKey)