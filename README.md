# Welcome to your Portfolio

Welcome to Bobby's Portfolio

Project Info

URL: bobbyportfolio.vercel.app (Update this URL after deployment)

How Can I Edit This Code?

This portfolio was created by Bobby Devarapu. You can edit it in several ways:

Use Your Preferred IDE

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will be reflected in your deployed site.

The only requirement is having Node.js & npm installed - install with nvm.

Follow these steps:

# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/bobbydevarapu/bobby-portfolio.git

# Step 2: Navigate to the project directory.
cd bobby-portfolio

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev

Edit a File Directly in GitHub





Navigate to the desired file(s) in the repository.



Click the "Edit" button (pencil icon) at the top right of the file view.



Make your changes and commit the changes.

Use GitHub Codespaces





Navigate to the main page of your repository.



Click on the "Code" button (green button) near the top right.



Select the "Codespaces" tab.



Click on "New codespace" to launch a new Codespace environment.



Edit files directly within the Codespace and commit and push your changes once you're done.

What Technologies Are Used for This Project?

This project is built with:





Vite



TypeScript



React



shadcn-ui



Tailwind CSS

How Can I Deploy This Project?

To deploy your portfolio to Vercel:





Install Vercel CLI:





Open your terminal and run:

npm install -g vercel



Log in to Vercel:





Run:

vercel login



Follow the prompts to log in with your GitHub account.



Deploy the Project:





From your project directory (C:\Users\BOBBY\OneDrive\CODE-FILES\bobby-portfolio), run:

vercel



Vercel will detect your project and ask:





Set up and deploy this directory? Answer Yes.



Link to an existing project? Select your GitHub repository (bobbydevarapu/bobby-portfolio) or create a new project.



Install dependencies? Answer Yes to let Vercel run npm install.



After the build succeeds, Vercel will provide a deployment URL (e.g., https://bobbyportfolio.vercel.app).



Optional Configuration:





If images or assets don’t load, add a vercel.json file in the root directory with:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "builds": [
    { "src": "package.json", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/(.*\\.(jpg|png|gif|ico|pdf))", "dest": "/$1" }
  ]
}



Save it, then rerun vercel.re here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
