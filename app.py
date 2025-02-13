from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    email = request.form.get('email')
    phone = request.form.get('phone')
    country = request.form.get('country')

    print(f"New Application: {name}, {email}, {phone}, {country}")  # Simulating database

    return "Form submitted successfully! We will contact you soon."

if __name__ == '__main__':
    app.run(debug=True)
