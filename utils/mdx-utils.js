import { api } from '../services/api'

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://asucctlnlkkknqaqjrbz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdWNjdGxubGtra25xYXFqcmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNzEyMDUsImV4cCI6MjA0Njc0NzIwNX0.y6AUZgScsNTxXiR2bw0HB_h7hlwlzS6yiRFoe6EQWyE'
const supabase = createClient(supabaseUrl, supabaseKey)


export const getPosts = async () => {
    const {data} = await api.get('/posts'); 
    console.log('Data returned from API:', data);
    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const {data} = await api.get(`/posts/?id=eq.${id}`)

    console.log('Data returned from API:', data);

    if(data){
        return data;
    }

    return {data}

    
}

export const getPostById = async (id) => {
  
        let { data: posts, error } = await supabase
            .from('posts')
            .select('id')
    
        if (error){
            console.log(error)
        }
        console.log("2" + posts.id)
        return posts;
    
    }


