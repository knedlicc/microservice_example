
## Getting started

### Run

In the root directory run the following command:

```
docker-compose up
```

Docker compose will start the following services: vuecalc(front-end), redis, storage, calc1, calc2, prometheus and grafana.
Configuration of the services can be found in the docker-compose.yml file.

### Redis service

Admin UI: http://localhost:8081

### Storage service
Works with Redis db.

Base API url: http://localhost:8000/api/storage

Endpoints:
1. GET /healthz - health check
2. GET /operations - list all saved operations
3. POST /create - create a new operation
4. GET /delete - delete an operation (used for scheduled job to delete old operations)


### calc1 service
Serves the addition and subtract calculator operations.

Base API url: http://localhost:9000/api/calc1

Endpoints:
1. GET /healthz - health check
2. GET /add - add operation for 2 numbers
3. GET /sub - subtract operation for 2 numbers

### calc2 service
Serves the divide and multiply calculator operations.

Base API url: http://localhost:9001/api/calc2

Endpoints:
1. GET /healthz - health check
2. GET /multiply - multiply operation for 2 numbers
3. GET /divide - divide operation for 2 numbers

### Prometheus service
Prometheus collects metrics and manages alerts.
Connected to calc1, calc2 and storage services.
Admin UI: http://localhost:9090

### Grafana service
Grafana visualizes matrices and manages alerts collected by Prometheus.

Admin UI: http://localhost:3000

### Front-end service
Vue allows to access to the calculator and interact with it.

Admin UI: http://localhost:2000


