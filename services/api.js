import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://asucctlnlkkknqaqjrbz.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdWNjdGxubGtra25xYXFqcmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNzEyMDUsImV4cCI6MjA0Njc0NzIwNX0.y6AUZgScsNTxXiR2bw0HB_h7hlwlzS6yiRFoe6EQWyE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdWNjdGxubGtra25xYXFqcmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNzEyMDUsImV4cCI6MjA0Njc0NzIwNX0.y6AUZgScsNTxXiR2bw0HB_h7hlwlzS6yiRFoe6EQWyE"
    }
})