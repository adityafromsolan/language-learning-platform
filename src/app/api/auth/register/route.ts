import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';

// In a real application, this would be a database call
let users = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    password: '$2b$10$mSgAKFGY1h6GqY3RKCRrDeaGtpoR4S4ao3mwUH/pmQp2GVcK5CwSi', // 'password123'
  },
];

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    if (users.some((user) => user.email === email)) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create new user
    const newUser = {
      id: String(users.length + 1),
      name,
      email,
      password: hashedPassword,
    };

    // Add user to "database"
    // In a real application, this would be a database insert
    users.push(newUser);

    // Return success response without the password
    return NextResponse.json(
      {
        message: 'User registered successfully',
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'An error occurred during registration' },
      { status: 500 }
    );
  }
} 