import { Input } from '@components/ui/input'; // Import the Shadcn Input component

function EnterEmail({checkEmail}: {checkEmail: () => void}) {
    // ... existing code ...

    return (
        <div>
            {/* ... existing code ... */}
            <Input type="email" placeholder="Enter your email" required onClick={checkEmail} /> {/* Added email input field */}
            {/* ... existing code ... */}
        </div>
    );
}

export default EnterEmail