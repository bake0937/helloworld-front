# build and run
docker-compose up -d

# create project & startup project  
docker-compose exec vue sh

vue create project_name

    ? Please pick a preset: Manually select features
    
    ? Check the features needed for your project:
    
    ❯◉ Babel
    
    ◉ TypeScript
    
    ◯ Progressive Web App (PWA) Support
    
    ◉ Router
    
    ◯ Vuex
    
    ◯ CSS Pre-processors
    
    ◉ Linter / Formatter
    
    ◯ Unit Testing
    
    ◯ E2E Testing
    
cd project_name

yarn serve

# Run the application from outside Docker
docker exec front yarn serve

# Display help for yarn command
npx vue-cli-service help

# remove
docker-compose down --rmi all

# start
docker-compose start

# restart
docker-compose restart 

# stop
docker-compose stop


