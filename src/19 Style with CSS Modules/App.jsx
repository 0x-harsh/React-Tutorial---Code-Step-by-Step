import Profile from "./Profile"
import style from './App.module.css'

const App = () => {
    return (
        <div>
            <div className={style.heading}>CSS Modules</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat exercitationem sequi quaerat dolorum sunt excepturi a consequuntur itaque assumenda dolor error dicta magni repellat natus eveniet voluptate inventore omnis totam reprehenderit accusamus quo beatae? Voluptas, iure! Blanditiis libero impedit dignissimos ex alias nisi ea.</p>
            <hr />
            <Profile />
        </div>
    )
}

export default App