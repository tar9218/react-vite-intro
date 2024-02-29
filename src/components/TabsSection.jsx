import Button from "./Button/Button.jsx";

function TabsSection({active, onChangeFunction}) {
    return (
        <section>
            <Button isActive={active === 'main'} buttonClicked={() => onChangeFunction('main')}>Home</Button>
            <Button isActive={active === 'feedback'}
                    buttonClicked={() => onChangeFunction('feedback')}>Feedbacks</Button>

            <Button isActive={active === 'effect'}
                    buttonClicked={() => onChangeFunction('effect')}>Effect</Button>
        </section>
    );
}

export default TabsSection;
