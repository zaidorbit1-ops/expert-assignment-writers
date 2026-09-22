import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './pages/Contact';

test('contact form shows loading then replaces itself with a success message when the CRM result arrives', async () => {
  render(<Contact />);

  await userEvent.type(screen.getByLabelText(/full name/i), 'Jane Doe');
  await userEvent.type(screen.getByLabelText(/email address/i), 'jane@example.com');
  await userEvent.type(screen.getByLabelText(/phone number/i), '+44 7700 900000');
  await userEvent.type(screen.getByLabelText(/your message/i), 'I need help with my business management assignment.');

  await userEvent.click(screen.getByRole('button', { name: /send message/i }));

  expect(screen.getByText(/sending/i)).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /send message/i })).not.toBeInTheDocument();

  await act(async () => {
    window.dispatchEvent(new CustomEvent('crm-form-result', {
      detail: {
        formId: 'contact-form',
        success: true,
        name: 'Jane Doe',
        message: 'Hey Jane Doe, we have received your query. Our team will contact you shortly.',
      },
    }));
  });

  expect(await screen.findByText(/hey jane doe, we have received your query/i)).toBeInTheDocument();
  expect(screen.queryByLabelText(/full name/i)).not.toBeInTheDocument();
});
