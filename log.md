2024/08/02
- GCP
    - Created GCP Account called cloudflare-testing with wizwoodhead@gmail.com
    - Created GCP Billing Account mapped to cloudflare-testing
- Dockerhub
    - Created Dockerhub account {app|hub}.docker.com with w.woodhead@hotmail.com
    - created repo williamwoodhead/lightstack
    - created Access Token on dockerhub called "Lightstack - Read/Write - for Github Actions & localhost" (see secrets.txt)
- Github
    - changed default branch to main
    - added 2 secrets DOCKER_USERNAME & DOCKER_PASSWORD
- GCP 
    - Created Cloud Run instance with domain mapping
    - Verified Lightstack.co.uk with Google Search Console
    - Updated DNS records in Cloudflare for lightstack.co.uk

2024/08/05 
- GCP
    - created secret in secret manager for LIGHTSTACK_TURNSTILE_SECRET_KEY
    - added Secret Manager Secret Accessor role to the service account responsible for Cloud Run: 308293636020-compute@developer.gserviceaccount.com



