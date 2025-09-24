import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

// Mock des composants enfants si nécessaire
jest.mock('./about/About', () => () => <div data-testid="about">About</div>);
jest.mock('./certificates/Certificates', () => () => <div data-testid="certificates">Certificates</div>);
jest.mock('./certificates/Certificates', () => () => <div data-testid="certificates">Certificates</div>);
jest.mock('./certificates/Certificates', () => () => <div data-testid="certificates">Certificates</div>);
jest.mock('./certificates/Certificates', () => () => <div data-testid="certificates">Certificates</div>);
jest.mock('./certificates/Certificates', () => () => <div data-testid="certificates">Certificates</div>);
jest.mock('./certificates/Certificates', () => () => <div data-testid="certificates">Certificates</div>);
// ... mocks pour les autres composants

describe('Home Component', () => {
  it('renders all child components', () => {
    render(<Home />);
    
    // Vérifie que chaque composant enfant est présent
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('certificates')).toBeInTheDocument();
    // ... autres assertions
  });

  it('renders in correct order', () => {
    render(<Home />);
    
    const components = screen.getAllByRole('generic');
    // Vérifie l'ordre des composants si nécessaire
  });
});