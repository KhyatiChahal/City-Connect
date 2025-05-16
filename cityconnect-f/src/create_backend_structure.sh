#!/bin/bash

# Create directories
mkdir -p backend
mkdir -p backend/config
mkdir -p backend/controllers
mkdir -p backend/models
mkdir -p backend/routes
mkdir -p backend/middleware

# Create files
touch backend/config/db.js
touch backend/controllers/projectController.js
touch backend/controllers/userController.js
touch backend/controllers/eventController.js
touch backend/models/Project.js
touch backend/models/User.js
touch backend/models/Event.js
touch backend/routes/projectRoutes.js
touch backend/routes/userRoutes.js
touch backend/routes/eventRoutes.js
touch backend/middleware/authMiddleware.js
touch backend/server.js