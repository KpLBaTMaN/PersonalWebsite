from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI(title="Personal Website")

# Instantiate the Jinja2 templates for rendering HTML
templates = Jinja2Templates(directory="frontend/src/templates")


# Define routes for different sections

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/about", response_class=HTMLResponse)
async def about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request})


# @app.get("/blog", response_class=HTMLResponse)
# async def blog(request: Request):
#     return templates.TemplateResponse("blog.html", {"request": request, "blog_posts": blog_posts})



# Route to handle the contact form submission
@app.post("/contact")
async def contact_form(email: str, message: str):
    # Process the email and message
    # send an email to myself or store the messages in a database
    pass


# Route to serve downloadable resume
@app.get("/resume")
async def download_resume():
    # Return the resume file for download
    pass



# Start the server with uvicorn
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)