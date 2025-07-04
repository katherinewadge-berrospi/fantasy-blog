# Away with the Faeries – A Fantasy Blog
Welcome to a realm of whispered lore, enchanted tales, and wanderings through faerie-tinged forests. Read our author's posts and converse in the comments!

![Mockup Screenshots](static/images/readme/mock-up.png)

View the [live application](https://away-with-the-faeries-61d308bdeab5.herokuapp.com/) for project 4 for the Code Institute.

## Table of Contents:
1. [User Experience (UX)](#user-experience-ux)
2. [Design](#design)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Libraries](#libraries-used)
6. [Testing](#testing)
7. [Bugs](#bugs)
8. [Deployment](#deployment)
9. [Credits](#credits)
10. [Acknowledgments](#acknowledgments)

---

## **User Experience (UX)**
The homepage greets visitors with 6 initial blog posts with short excerpts that entice the reader to click for the full story. A message in the top-right corner informs visitors if they are logged in, and gets non-registered visitors to create an account. See navigation section for examples.

### **User Stories**

#### **Audience**
Away with the Faeries is for fantasy readers who delight in immersive fictional worlds, whether they have a romantic twist (what some call “romantasy”) or are action packed. Our core audience is for anyone aged 16 and up as most books mentioned may not be suitable. However, the content of the blogs will always be suitable for all who crave lush settings, compelling characters, and the subtle interplay of magic and emotion. Many are readers of speculative fiction are bloggers, or aspiring writers seeking inspiration and community. By presenting six featured posts with engaging excerpts on the homepage, it encourages engagement, while personalized touches like displaying their name on the login status create a sense of belonging for both returning fans and newcomers. The site’s fantasy-inspired design of soft color palettes, ornamental typography, and beautiful images match the theme and keeps visitors engaged, ensuring that navigating the site feels as effortless as wandering through an enchanted forest.

##### **Accessibility & UX Quality**
Accessibility has been integrated into every layer of Away with the Faeries, earning top Lighthouse scores across Accessibility, Performance, Best Practices, and SEO. Semantic HTML elements, clear alt text on all images, and well-contrasted color combinations, ensure that screen-reader users and those with visual or motor impairments can fully engage with the content. Lazy-loaded images and properly specified intrinsic dimensions keep cumulative layout shift near zero, while descriptive form labels and ARIA roles make account registration and commenting intuitive for assistive technologies. Responsive Bootstrap utilities guarantee that whether on desktop or mobile, the site’s whimsical aesthetic and functionality hold firm, meeting our audience’s expectations for both beauty and usability. These measures demonstrate a commitment not only to enchanting storytelling, but also to an inclusive experience for every visitor.

#### **Epics**
| **Epics** | **User story** | **Tasks** |
|----|----|----|
| **Post Browsing & Reading** | As a site user, I can view a paginated list of posts so that I can select which post I want to view. | Add pagination to the post-list view (6 posts per page). Create “Next” and “Previous” controls in the template. |
| ^ | As a site user, I can click on a post so that I can read the full text. | Define a PostDetailView with its own URL pattern. Build the detail template to display title, author, date, content, likes. Write Django view tests to ensure each post URL returns the correct content. |
| **Branding & Design** | As a site visitor, I want the blog’s design to reflect a fantasy aesthetic so that the look and feel matches the content and enhances immersion. | Develop a custom base.html layout with fantasy-inspired fonts, colours and background images. Integrate Bootstrap theming and custom CSS (style.css). Manually verify design consistency across homepage, post pages, about page. |
| **About & Collaboration** | As a Site Admin, I can create or update the About page content so that it is available on the site. | Define an About model (title, content, image, date). Register About in Django admin for CRUD operations. Write a migration and verify content persists. |
| ^ | As a site user, I can click the About link so that I can read about the site. | Add “About” nav link in base.html. Create about_me view rendering the latest About instance. Write a view test for GET /about/ ensuring status 200 and template used. |
| ^ | As a potential collaborator, I can fill in a contact form so that I can submit a collaboration request. | Define CollaborateRequest model (name, email, message, timestamp). Create CollaborateForm and render it in about_me.html with Crispy Forms. In about_me view, handle POST: validate, save, add a Django success message, redirect back. Write two view tests: GET /about/ renders the form, POST valid data saves a record and displays the success message. |
| **User Authentication & Profiles** | As a Site User, I can register and log in so that I can comment on a post. | Install and configure django-allauth (settings, URLs, templates). Add “Register” and “Login” links to the navbar. Manually test signup, login, logout flows. |
| ^ | As a Site User, I can leave, edit, and delete comments so that I can join the conversation. | Define Comment model (FK to Post, author, body, date, approved). Create CommentForm, embed in post detail template. In detail view, handle POST for new comments (mark as pending). Add edit/delete views and URL patterns for comment authors. Write Django tests for comment creation, approval, editing, deletion. |
| **Post “Likes” Interaction** | As a registered reader, I want to click a “like” button on any blog post so that I can show appreciation for content and authors. | In likeButton.js, write function toggleLike(). Write Jest unit tests for toggleLike (increment & decrement). Write Jest DOM tests (Jest+jsdom) to verify aria-pressed toggles and count updates on click. |
| **Admin Workflow** | As a Site Admin, I can create, edit, and delete draft posts so that I can prepare content for later publishing. | Add status field (draft/published) to the Post model. Update admin interface to filter by status. Manually verify draft workflow—saving drafts, publishing later. |
| ^ | As a Site Admin, I can approve or disapprove comments so that I can filter out objectionable content. | Add an “approved” Boolean field on Comment. Update admin list view to show pending comments with approve/delete actions. Manually verify that only approved comments appear on the public site. |

#### **Milestones**
##### View posts and homepage
- As a site user, I can view a paginated list of posts so that I can select which post I want to view.
- As a Site User, I can click on a post so that I can read the full text.
- As a site visitor (or content author), I want the blog’s design to reflect a fantasy aesthetic so that the look and feel matches the content and enhances immersion.

##### About us page
- As a Site Admin, I can create or update the about page content so that it is available on the site.
- As a Site User, I can click on the About link so that I can read about the site.
- As a Potential Collaborator, I can fill in a contact form so that I can submit a request for collaboration.

##### Visitor interactions
- As a Site User I can register an account so that I can comment on a post.
- As a Site User I can leave comments on a post so that I can be involved in the conversation.
- As a Site User I can modify or delete my comment on a post so that I can be involved in the conversation.
- As a registered reader, I want to click a “like” button on any blog post so that I can show appreciation for content and authors.

##### Django admin
- As a Site Admin I can create draft posts so that I can finish writing the content later.
- As a Site Admin I can create, read, update and delete posts so that I can manage my blog content.
- As a Site Admin I can approve or disapprove comments so that I can filter out objectionable comments.
- As a Site User / Admin I can view comments on an individual post so that I can read the conversation
- As a Site Owner, I can store collaboration requests in the database so that I can review them.

All the user stories had assessment criteria to meet and only once all had been met, could it be considered complete.

![User Story Open](static/images/readme/user-story-opened.png)

### **Admin Panel**
In the Django Admin Panel, authorised users can perform all CRUD operations on Users, Posts, Comments, and Collaboration Requests to keep the site a safe and friendly place for all. The admin team can add, edit, approve, and delete any user, post, comments, or collaboration requests, all from an easy to use portal.

![Admin Panel](static/images/readme/admin-homepage.png)
![Admin Users](static/images/readme/admin-users.png)
![Admin Delete User](static/images/readme/admin-user-delete.png)
![Admin Delete Success](static/images/readme/admin-deleted-user-example.png)
![Admin Blog Posts](static/images/readme/admin-blog-post-list.png)
![Admin Add Blog Post](static/images/readme/admin-add-post-1.png)
![Admin Add Blog Post](static/images/readme/admin-add-post-2.png)
![Admin Comments](static/images/readme/admin-comments.png)
![Admin Collaboration Requests](static/images/readme/admin-collab-requests.png)

### **Wireframes**
Wireframes were created using [Balsamiq Cloud](https://balsamiq.cloud/) and were followed during the production of the app. The only things that had to be tweaked were related to sizing of the cards and the about page. You can see how I managed to keep to the wireframes by looking at the mock-up and the live website.

For desktop:

![Wireframe Home Desktop](static/images/readme/wireframe-desktop-home.png)
![Wireframe About Desktop](static/images/readme/wireframe-desktop-about.png)
![Wireframe Blog Desktop](static/images/readme/wireframe-desktop-blog.png)

For mobile:

![Wireframe Home Mobile](static/images/readme/wireframe-mobile-home.png)![Wireframe About Mobile](static/images/readme/wireframe-mobile-about.png)![Wireframe Blog Mobile](static/images/readme/wireframe-mobile-blog.png)

### **Entity Relationship Diagram**
![ERD](static/images/readme/er-diagram.png)

### **Error 404 and 500**
Users are greeted with an error 404 page if a URL that is not recognised.

Users are also greeted with an error 500 page if there is a server issue.

![404](static/images/readme/404.png)
![500](static/images/readme/500.png)

### **Agile Methodology**
Agile methodology was applied to this project, allowing the app to be built in a logical, structured manner that promotes flexibility to change the design throughout the development process.

GitHub Issues, Milestones, and Projects were used to manage the development process. Each part of the app was broken down into User Stories with Tasks, each assigned with a label (MoSCoW), a milestone, and a project. The board view of the Project feature displayed the progress as a 'kanban board'. 

The Issues all started in the 'Todo' column which were then prioritised for development. They then moved to the 'In Progress' column to show the feature had started to be developed. Finally, they were moved into the 'Done' column when the feature had been successfully developed with the acceptance criteria all met.

![Kanban Board](static/images/readme/user-stories.png)


User stories were prioritised using the MoSCoW prioritisation technique. Each user story was given one of the following labels:

- Must haves - the user story is guaranteed to be delivered.
- Should haves - the user story would add significant value but is not vital.
- Could haves - the user story would have a small impact if left out.
- Won't haves - the user story is not a priority in the current iteration.

![View Table](static/images/readme/user-stories-table.png)
![View Table](static/images/readme/user-stories-table-2.png)


## **Design**
### **Colour Palette**
![Colour Palette](static/images/readme/colour-palette.png)

**Deep, mossy greens**
- Evoke shadowy glades, ancient oaks and moss-carpeted paths; the kind of woodland setting where faeries and forest creatures live. 
- The deep greens anchor the design in an earthy mystique and hidden realms.

**Warm, burnished gold**
- Feels like rays of sunlight breaking through foliage, or the glint of treasure. 
- It adds a touch of alchemical warmth and richness, hinting at magic, royalty, or storied artifacts.

**Soft, dreamy pastels**
- The pale periwinkle and lavender introduce an otherworldly glow.
- Mimics moonlight filtering through mist, twinkling fairy dust, or delicate petals of blossoming flowers.

**Regal purple**
- Envokes a sense of romance, nobility, and power. 
- Purple’s historic ties to mysticism and nobility make it ideal for tales of enchanted royal courts or hidden fairy covens.

By using dark, medium, and light shades, this palette adds contrast without clashing. It provides solid backgrounds, keeps text clear, and offers accent colors—everything you need to draw readers into a fairy-tale world.

## **Features**

### **Navigation Bar**
A simple navigation bar that fits the colour palette with a logo that links to the homepage and the blog name on the right. On smaller devices, the navigation bar includes of the logo and a drop down menu button that turns gold once pressed, as per the colour palette.

On Wide Devices:

![Desktop Navbar](static/images/readme/navbar-desktop.png)
![Desktop Navbar Logged Out](static/images/readme/navbar-desktop-logged-out.png)

On Mobiles:

![Mobile Navbar Logged Out](static/images/readme/navbar-mobile-dropdown.png)
![Mobile Navbar](static/images/readme/navbar-mobile.png)

### **Index Cards**
Six index cards are shown on each page, with a button at the bottom of the screen, allowing users to flick between pages. The index cards are a light, pastel purple with a gold border that changes when the user hovers (see image below) to a light, pastel green with a deep purple border with the title underlines with the same purple. Each card also contains the same line drawing of some flowers to avoid too much distraction from the content of the cards. The excerpts are capped at 220 characters shown on the cards to save space and it looking crammed with text. Finally, the author of the post is credited at the bottom of each card.

![Index Cards](static/images/readme/index-cards.png)

### **Display messages**
Display messages give users immediate, contextual feedback about the outcome of their actions. Whether they’ve submitted, updated, or deleted a comment, successfully signed in, or sent a request, this helps reassure users that the system is responding as expected. Including a close (“X”) button lets users dismiss each notification when they’ve read it, keeping the interface clean and allowing them to focus on the main content once the message is acknowledged.

![Display message](static/images/readme/comment-submitted.png)
![Display message](static/images/readme/comment-updated.png)
![Display message](static/images/readme/comment-deleted.png)
![Display message](static/images/readme/successful-login.png)
![Display message](static/images/readme/collab-recieved.png)

### **Post Detail**
When opened, the title is in bold and deep green, aligned to the left to allow space for a masthead image that the user can add from their files. The author and the date are displayed underneath as a subheading. There is then a break line to indicate the blog post is starting. Underneath the contents of the blog, those logged in can like a post and the total number of likes is shown. Once, a post is liked, it can be unliked but visitors cannot simply dislike a post, limiting negativity.

![Post](static/images/readme/post-detail.png)
![Like](static/images/readme/like.png)
![Dislike](static/images/readme/dislike.png)

### **Comments**
The comment section allows visitors to start a conversation or debate a relevant topic. There is a counter that displays the number of comments a post has next to an icon. The comments displayed have to be approved by the site's admin team to prevent any inappropriate content. Furthermore, users can either edit or delete their own comments if they want to alter their message. A warning message is displayed if a user tries to delete a commemt as this action cannot be undone. If users want to leave or edit a message, all they need to do is write in the text field and press the big submit or update button.

![Comments](static/images/readme/comments.png)
![Comment Update](static/images/readme/edit-update-comment.png)
![Comment Edit Buttons](static/images/readme/comment-delete-edit.png)
![Delete message](static/images/readme/delete-warning.png)

### **About**
A personalised message from the site owners, an area that can also be edited on the admin panel. This allows users to read more about the authors and also gives them a chance to request for a collaboration. The form fields are all required so that the admin can respond to the correct contact. Furthemore, on the admin panel there is the option to mark the collab requests as done or read.

![About](static/images/readme/about.png)
![Collaboration Request](static/images/readme/collab-request.png)

### **Footer**
A simple footer that corresponds with the colour scheme and has the text in the centre so it's nice and easy to see and read. There are also 3 social media icons that each link to the relevant site (Facebook, Twitter/X, and Instagram).

![Footer](static/images/readme/footer.png)

### **Security Measures**
A user must be logged in before they can like a post or leave a comment, ensuring that all interactions are tied to a verified account and reducing the risk of anonymous spam. Only users granted staff or superuser status are authorized to access the Django administration panel; any regular user will receive an “unauthorized” message if they attempt to log in there.

![Login message](static/images/readme/login-comment.png)
![Login message](static/images/readme/login-like.png)
![Admin Login](static/images/readme/admin-security.png)

## **Technologies Used**
- Backend: Django (Python)
- Database: PostgreSQL
- Frontend: HTML, CSS, Bootstrap
- Hosting: Heroku
- Storage: Cloudinary for image uploads


## **Libraries Used**
- Web framework and related plugins

    - Django

    - django-allauth

    - django-crispy-forms & crispy-bootstrap5

    - django-summernote

- WSGI/ASGI server

    - gunicorn

    - asgiref

- Database/connectivity

    - psycopg2 / psycopg2-binary

    - dj-database-url

- HTTP clients & auth

    - requests

    - requests-oauthlib

    - oauthlib

    - python3-openid

- Security and crypto

    - cryptography

    - PyJWT

    - defusedxml

- Asset/storage

    - cloudinary

    - dj3-cloudinary-storage

    - whitenoise

- Utilities & data handling

    - bleach

    - dill

    - tomlkit

    - sqlparse

- Development tools

    - pylint, astroid, mccabe

    - isort

    - setuptools

- Dependency helpers / packaging

    - certifi, idna, charset-normalizer, urllib3, webencodings

    - cffi, pycparser

    - platformdirs, typing_extensions, six, tzdata


## **Testing**
- Manual Testing: Validated all user stories through structured tests.
- Automated Testing: Tested all python and JavaScript code through pytest, jest, node, and npm.
- Google Lighthouse Performance: Performance scores captured for mobile and desktop.
- Browser Compatibility: Verified across Chrome, Firefox, Edge.
- Code Validation: W3C Code Validator and PEP8 formatting were used, and CI Python Linter and JShint.

### **Manual Testing**

#### **User Story Testing**
| **User Story** | **Testing Method** | **Expected Outcome** | **Assesment Criteria Met** |
|---------------|----------------|----------------|---------|
| As a site user, I can view a paginated list of posts so that I can select which post I want to view. | Usability Testing | Six posts are visible on each page with working buttons to go to the next/previous page to see all published posts. | ✅ Pass |
| As a Site User, I can click on a post and read the full text. | Usability Testing | Each post has it's own URL that shows the whole text, author, date, and likes. | ✅ Pass |
| As a site user, I want the blog’s design to reflect a fantasy aesthetic so that the look and feel matches the content and enhances immersion. | Usability Testing | Site has a faerie inspired colour palette with a fantasy inspired background image. | ✅ Pass |
| As a Site Admin, I can create or update the about page content so that it is available on the site. | Functionality Testing | The about app is visible in the admin panel. | ✅ Pass |
| As a Site User, I can click on the About link so that I can read about the site. | Usability Testing | When the About link is clicked, the about text is visible. | ✅ Pass |
| As a Potential Collaborator, I can fill in a contact form so that I can submit a request for collaboration. | Functionality Testing | Form fields are functioning, cannot be left empty, and post successfully. | ✅ Pass |
| As a Site User I can register an account so that I can comment on a post. | Functionality Testing | Users can register account using an email. Once logged in, they can comment. | ✅ Pass |
| As a Site User I can leave comments on a post so that I can be involved in the conversation. | Functionality Testing | Comment successfully posts to the admin panel and when approved, all users can see the comment thread. | ✅ Pass |
| As a Site User I can modify or delete my comment on a post so that I can be involved in the conversation. | Functionality Testing | Logged in users can either edit or delete their own comments from a post. | ✅ Pass |
| As a registered reader, I want to click a “like” button on any blog post so that I can show appreciation for content and authors. | Functionality Testing | Logged in users can like a post and the count goes up by one. A like can also be removed and decrements count. | ✅ Pass |
| As a Site Admin I can create draft posts so that I can finish writing the content later. | Usability Testing | A logged in superuser can create draft blog posts, save them and edit or post them at a later date. | ✅ Pass |
| As a Site Admin I can create, read, update and delete posts so that I can manage my blog content. | Functionality Testing | Logged in superusers can create posts, read posts, update, and delete posts. | ✅ Pass |
| As a Site Admin I can approve or disapprove comments so that I can filter out objectionable comments. | Functionality Testing | Logged in superusers can choose to approve pending comments or delete them. | ✅ Pass |
| As a Site User / Admin I can view comments on an individual post so that I can read the conversation. | Usability Testing | Users can view all approved comments and read the conversation. | ✅ Pass |
| As a Site Owner, I can store collaboration requests in the database so that I can review them. | Security Testing & Functionality Testing | All posted forms are stored and can be viewed on admin panel. Each request can also be marked as read. | ✅ Pass |

#### **Testing Features**
| **Feature** | **Desired Function** | **Outcome** |
|---------------|----------------|----------------|
| Navbar | Responsive design and functioning links. | On small devices, options collapse and is replaced with a button that when clicked, displays the pages. |
| Index cards | Clear cards that also change when hovered over. | Hovering changes their colour, underlines the title, and makes the card move upwards. |
| Pagination | Six cards per page with a prev/next button. | Only Next is displayed if there are no previous pages (page 1), and vice versa where  the Prev button is only displayed if there are previous pages (pages over 1). |
| Post detail | Show the full post content with title, author, date, tags, and interactive controls. | The detailed post page renders all content and metadata correctly; like and comment buttons are visible and work as expected. |
| Likes | Increment or decrement by 1 or per user. | Only logged in users can like posts. The like button makes the counter go up by 1 and users can remove their like, decrementing the counter by 1. |
| Comments | Enable logged-in users to add, edit, and delete comments on each post. | Authenticated users see a comment form beneath the post; submitted comments display in order; users have edit/delete controls on their own comments; admin can moderate. |
| About text | Allow the site admin to create or update the About page content; let visitors view it. | Clicking “About” brings up the latest admin-authored text; any changes made in the admin panel appear immediately on the live page. |
| Collaboration Request | Provide a form for potential collaborators to submit requests; store submissions in the database. | The collaboration form captures name, email, and message; on submit the user sees a confirmation and the request is saved for the site owner to review. |


### **Automated Testing**
To ensure reliability across both back-end and front-end code.

**Back-end**:
- Django and Python tests
    - Django's built in test framework, invoked by "python manage.py test"
    - Unit and integration tests cover models, views, forms, and URL routing. Each test spins up an isolated test database, exercises CRUD operations (e.g. creating posts, saving collaboration requests), validates form logic, and checks that the correct templates and context data are returned.
    - Result: 100% of Python tests passing, with no errors or failures, as shown in the screenshot.

![Test](static/images/readme/python-test-working.png)
![Test](static/images/readme/pytest-working.png)

**Front-end**:
- Jest and JavaScript tests
    - Jest, invoked "npm test" which maps to "jest --colors --coverage" in package.json.
    - Using the jsdom environment which simulates user clicks on the “like” button, and asserts that aria-pressed and the visible count update appropriately.
    - A basic sanity check confirms the test harness itself is functioning.
    - All JavaScript files report 100% coverage across statements, branches, functions, and lines.

![Test](static/images/readme/npm-test.png)
![Test](static/images/readme/jest-working.png)


### **Google Lighthouse**
On a **desktop**, it scored the following on the home, about, and post pages, respectively:

![Lighthouse Desktop](static/images/readme/lighthouse-desktop-home.png)
![Lighthouse Desktop](static/images/readme/lighthouse-desktop-about.png)
![Lighthouse Desktop](static/images/readme/lighthouse-desktop-post.png)

On a **mobile**, it scored the following on the home, about, and post pages, respectively:

![Lighthouse Mobile](static/images/readme/lighthouse-mob-home.png)
![Lighthouse Mobile](static/images/readme/lighthouse-mob-about.png)
![Lighthouse Mobile](static/images/readme/lighthouse-mob-post.png)

### **Browser Compatibility**
The site was tested across multiple browsers for consistency and responsiveness:

| **Browser** | **Result** |
|------------|-----------|
| Google Chrome | ✅ Pass |
| Mozilla Firefox | ✅ Pass |
| Microsoft Edge | ✅ Pass |


### **Code Validation**
#### HTML
- Used **[W3C Markup Validator](https://validator.w3.org/)** to check HTML files.
- Errors fixed where applicable.
- Results included:

![HTML Validator](static/images/readme/html-validator-home.png)
![HTML Validator](static/images/readme/html-validator-about.png)

#### CSS
- Used **[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)**.
- Ensured CSS follows best practices.
- Results included:

![W3C](static/images/readme/css-validator.png)

#### Python
- **[CI Python Linter](https://pep8ci.herokuapp.com/)** used.
- Errors corrected where applicable.
- Results included:

![Python Linter](static/images/readme/python-validator-about-admin.png)
![Python Linter](static/images/readme/python-validator-about-models.png)
![Python Linter](static/images/readme/python-validator-about-views.png)
![Python Linter](static/images/readme/python-validator-blog-admin.png)
![Python Linter](static/images/readme/python-validator-blog-models.png)
![Python Linter](static/images/readme/python-validator-blog-urls.png)
![Python Linter](static/images/readme/python-validator-blog-views.png)
![Python Linter](static/images/readme/python-validator-project-settings.png)
![Python Linter](static/images/readme/python-validator-project-urls.png)

#### JavaScript
- **[JShint](https://jshint.com/)** used.
- No errors to correct.
- Results included:

![JShint](static/images/readme/jshint.png)


## **Bugs**
| **Bug** | **Fix Implemented** |
|--------|-----------------|
| Floating footer | Fixed the footer to the bottom and added margins to the body. |
| Comment section shifted depending on screen size and number of comments| Updated Bootstrap layout, removed all height limitations for more responsive design. |
| Leave a comment form and button didn't fit inside parent container | Modified Boostrap utilities and removed a class from the form that was making it take up 1/3 of the column. |
| Python and venv stopped working after a crash, all packages were uninstalled | Uninstalling Python 3.13.3 and installing Python 3.12.4 and setting up a new venv. |
| Comment Edit and Delete buttons not working | The buttons lacked matching data- attributes and the script ran before the DOM was ready. The issue was resolved by embedding full Django URLs in data-delete-url/data-edit-url, deferring script execution, and reading IDs via e.currentTarget. |

## **Deployment**
The project was deployed to Heroku, a cloud platform, to make it accessible to users via a live URL.

### **Prerequisites**
- The project was created, tested, and DEBUG=False.

### **Steps to Deploy on Heroku**
1. Create a repository on GitHub.
    - A new repository was created and pushed to GitHub using Git.
    - The .gitignore file was configured to exclude unnecessary files like .env, __pycache__, venv, etc.
2. Prepare Project for Heroku.
    - A Procfile was created in the root directory: "web: gunicorn project.wsgi"
    - A requirements.txt file was generated: "pip freeze > requirements.txt"
3. Static and Media Files Configuration.
    - Whitenoise was added for static file management in production.
    - Cloudinary and cloudinary_storage was used for media file storage.
    - STATICFILES_STORAGE was set to whitenoise.storage.CompressedManifestStaticFilesStorage.
4. Set up Heroku and link to the repository.
    - A new app was created on Heroku Dashboard.
    - The app was linked to the GitHub repository under the "Deploy" tab.
5. Apply eco dynos.
6. Configure environment variables:
    - Go to the Settings > Reveal Config Vars section and add the keys:
        - `DATABASE_URL`
        - `SECRET_KEY`
        - `CLOUDINARY_URL`
        - `DISABLE_COLLECTSTATIC` (only for first deploy)
7. Migrate Database.
    - "heroku run python manage.py migrate"
    - "heroku run python manage.py createsuperuser"
8. Deploy manually through Heroku's Deploy tab.

### **Post-Deployment Checks**
After each deployment, the following were tested:
- The homepage loaded correctly.
- Static and media files displayed properly.
- All forms and buttons (login, sign up, comment, contact) functioned as expected.
- Admin access was restricted.

Deployment was done frequently throughout the project to spot and fix issues during development.

## **Credits**
- [Creating error landing pages](https://learndjango.com/tutorials/customizing-django-404-and-500-error-pages)
- [I think therefore I blog](https://github.com/Code-Institute-Solutions/django-blog-sourcecode/tree/main)
- [Creating the wireframes](https://balsamiq.cloud/)
- [Creating the ERD](https://mermaid.js.org/)
- [Creating the colour palette](https://www.favocolor.com/hex/ecdff5)
- [Django tutorial for VSCode](https://code.visualstudio.com/docs/python/tutorial-django)
- [Info on jest](https://jestjs.io/docs/getting-started)
- [Info on node](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Info on python testing](https://www.testim.io/blog/python-test-automation/)
- [CSS support](https://www.w3schools.com/css/css3_variables.asp)
- [Info on virtual environments](https://code.visualstudio.com/docs/python/environments)
- [Migration Guide](https://docs.google.com/document/d/e/2PACX-1vRfWv2mSizbxD_QjmDlF-g87-WuKnaO6tAiJf6XrkgLZO6laULxBKPGgd9pB9v8q0TC_huVYJjSuwOp/pub)
- [Cloudinary Storage](https://cloudinary.com/)

## **Acknowledgments**
Special thanks to my mentor Spencer Barriball for his guidance and for the Code Technical Support members who took the time to help when I got stuck.
