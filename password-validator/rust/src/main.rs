use std::io;

fn main() {
    println!("Enter password:");
    let mut buffer = String::new();
    io::stdin()
        .read_line(&mut buffer).unwrap();

    println!("Validating password...");
    let result = validate_password(buffer.to_string().trim());
    if result {
        println!("Password is valid!");
    } else {
        println!("Password is invalid!");
    }
}

pub fn validate_password(password: &str) -> bool {
    password.len() >= 8 &&
        password.chars().any(char::is_uppercase) &&
        password.chars().any(char::is_lowercase) &&
        password.chars().any(char::is_numeric)
}