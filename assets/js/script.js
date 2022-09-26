
const currWeek = 3;
let modalOpen = false;

const weekData = [
    {
        week: 1, 
        title: 'CyberSecurity Foundations', 
        data: [
            {
                title: "Technology",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <div style="position: relative; width: 80%; height: 0; padding-top: 56.2500%;
                            padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
                            border-radius: 8px; will-change: transform;">
                                <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFMXPSGSEE&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
                                </iframe>
                            </div>
                            <a role="button" style="padding:2px 2px; font-size: 1rem; border-radius: 8px; margin-left: 25%; color: #fff; text-decoration: none; background-color: #0d6efd; font-weight:400; border-color: #0d6efd;" 
                            href="https://youtu.be/zO0Ht5DPybc" target="_blank">VTF-LIVE Sep 16</a>
                            <br>
                            <br>
                            <li class="inside-text">
                                <p>MITRE ATTACK - <a href="https://attack.mitre.org/">https://attack.mitre.org/</a></p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <p>Using MITRE ATT&CK™  in Threat Hunting and Detection</p>
                                        <p><a href="/vtf_weekly/assets/pdf/Using MITRE ATT&CK™ in Threat Hunting and Detection.pdf"><svg viewBox="0 0 16 16" class="file" style="width: 10%; height: 10%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM8.59473 12.7266V10.6279L8.54004 9.56152L9.06641 10.1152L9.59277 10.6484C9.68848 10.7646 9.8457 10.833 9.98926 10.833C10.2969 10.833 10.5293 10.6143 10.5293 10.3066C10.5293 10.1357 10.4678 10.0127 10.3379 9.90332L8.45117 8.16699C8.29395 8.02344 8.16406 7.96191 7.99316 7.96191C7.8291 7.96191 7.69922 8.02344 7.54199 8.16699L5.65527 9.90332C5.52539 10.0127 5.46387 10.1357 5.46387 10.3066C5.46387 10.6143 5.68945 10.833 6.00391 10.833C6.14746 10.833 6.29785 10.7646 6.40039 10.6484L6.92676 10.1152L7.45312 9.56152L7.39844 10.6279V12.7266C7.39844 13.0547 7.67188 13.3008 7.99316 13.3008C8.32129 13.3008 8.59473 13.0547 8.59473 12.7266Z"></path></svg></a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p>MITRE ATT&CK® Mapping</p>
                                        <p><a href="/vtf_weekly/assets/pdf/MITRE ATT&CK® Mapping.pdf"><svg viewBox="0 0 16 16" class="file" style="width: 10%; height: 10%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM8.59473 12.7266V10.6279L8.54004 9.56152L9.06641 10.1152L9.59277 10.6484C9.68848 10.7646 9.8457 10.833 9.98926 10.833C10.2969 10.833 10.5293 10.6143 10.5293 10.3066C10.5293 10.1357 10.4678 10.0127 10.3379 9.90332L8.45117 8.16699C8.29395 8.02344 8.16406 7.96191 7.99316 7.96191C7.8291 7.96191 7.69922 8.02344 7.54199 8.16699L5.65527 9.90332C5.52539 10.0127 5.46387 10.1357 5.46387 10.3066C5.46387 10.6143 5.68945 10.833 6.00391 10.833C6.14746 10.833 6.29785 10.7646 6.40039 10.6484L6.92676 10.1152L7.45312 9.56152L7.39844 10.6279V12.7266C7.39844 13.0547 7.67188 13.3008 7.99316 13.3008C8.32129 13.3008 8.59473 13.0547 8.59473 12.7266Z"></path></svg></a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p>MITRE ATT&CK From Plan to Action</p>
                                        <p><a href="/vtf_weekly/assets/pdf/MITRE ATT&CK From Plan to Action.pdf"><svg viewBox="0 0 16 16" class="file" style="width: 10%; height: 10%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM8.59473 12.7266V10.6279L8.54004 9.56152L9.06641 10.1152L9.59277 10.6484C9.68848 10.7646 9.8457 10.833 9.98926 10.833C10.2969 10.833 10.5293 10.6143 10.5293 10.3066C10.5293 10.1357 10.4678 10.0127 10.3379 9.90332L8.45117 8.16699C8.29395 8.02344 8.16406 7.96191 7.99316 7.96191C7.8291 7.96191 7.69922 8.02344 7.54199 8.16699L5.65527 9.90332C5.52539 10.0127 5.46387 10.1357 5.46387 10.3066C5.46387 10.6143 5.68945 10.833 6.00391 10.833C6.14746 10.833 6.29785 10.7646 6.40039 10.6484L6.92676 10.1152L7.45312 9.56152L7.39844 10.6279V12.7266C7.39844 13.0547 7.67188 13.3008 7.99316 13.3008C8.32129 13.3008 8.59473 13.0547 8.59473 12.7266Z"></path></svg></a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p>MITRE ATT&CK® For Dummies</p>
                                        <p><a href="/vtf_weekly/assets/pdf/MITRE ATT&CK® For Dummies.pdf"><svg viewBox="0 0 16 16" class="file" style="width: 10%; height: 10%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM8.59473 12.7266V10.6279L8.54004 9.56152L9.06641 10.1152L9.59277 10.6484C9.68848 10.7646 9.8457 10.833 9.98926 10.833C10.2969 10.833 10.5293 10.6143 10.5293 10.3066C10.5293 10.1357 10.4678 10.0127 10.3379 9.90332L8.45117 8.16699C8.29395 8.02344 8.16406 7.96191 7.99316 7.96191C7.8291 7.96191 7.69922 8.02344 7.54199 8.16699L5.65527 9.90332C5.52539 10.0127 5.46387 10.1357 5.46387 10.3066C5.46387 10.6143 5.68945 10.833 6.00391 10.833C6.14746 10.833 6.29785 10.7646 6.40039 10.6484L6.92676 10.1152L7.45312 9.56152L7.39844 10.6279V12.7266C7.39844 13.0547 7.67188 13.3008 7.99316 13.3008C8.32129 13.3008 8.59473 13.0547 8.59473 12.7266Z"></path></svg></a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p>MITRE ATT&CK Design and Philosophy</p>
                                        <p><a href="/vtf_weekly/assets/pdf/MITRE ATT&CK Design and Philosophy.pdf"><svg viewBox="0 0 16 16" class="file" style="width: 10%; height: 10%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM8.59473 12.7266V10.6279L8.54004 9.56152L9.06641 10.1152L9.59277 10.6484C9.68848 10.7646 9.8457 10.833 9.98926 10.833C10.2969 10.833 10.5293 10.6143 10.5293 10.3066C10.5293 10.1357 10.4678 10.0127 10.3379 9.90332L8.45117 8.16699C8.29395 8.02344 8.16406 7.96191 7.99316 7.96191C7.8291 7.96191 7.69922 8.02344 7.54199 8.16699L5.65527 9.90332C5.52539 10.0127 5.46387 10.1357 5.46387 10.3066C5.46387 10.6143 5.68945 10.833 6.00391 10.833C6.14746 10.833 6.29785 10.7646 6.40039 10.6484L6.92676 10.1152L7.45312 9.56152L7.39844 10.6279V12.7266C7.39844 13.0547 7.67188 13.3008 7.99316 13.3008C8.32129 13.3008 8.59473 13.0547 8.59473 12.7266Z"></path></svg></a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p><a href="https://www.youtube.com/watch?v=z8jYveXXp9o">https://www.youtube.com/watch?v=z8jYveXXp9o</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p><a href="https://www.youtube.com/watch?v=khUw1sXqyps">https://www.youtube.com/watch?v=khUw1sXqyps</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p><a href="https://attack.mitre.org/tactics/enterprise/">https://attack.mitre.org/tactics/enterprise/</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p><a href="https://engage.mitre.org/learn-more-practical-guide/">https://engage.mitre.org/learn-more-practical-guide/</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Defend - <a href="https://d3fend.mitre.org/about/">https://d3fend.mitre.org/about/</a></p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <p><a href="https://www.mitre.org/publications/project-stories/mitre-defend-connects-cyber-community-to-counter-threats">https://www.mitre.org/publications/project-stories/mitre-defend-connects-cyber-community-to-counter-threats</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p><a href="https://www.extrahop.com/company/blog/2021/what-is-mitre-d3fend/">https://www.extrahop.com/company/blog/2021/what-is-mitre-d3fend/</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Navigator - <a href="https://atlas.mitre.org/navigator/">https://atlas.mitre.org/navigator/</a></p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <p><a href="https://resources.infosecinstitute.com/topic/how-to-use-mitre-attck-navigator-a-step-by-step-guide/">https://resources.infosecinstitute.com/topic/how-to-use-mitre-attck-navigator-a-step-by-step-guide/</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p><a href="https://www.youtube.com/watch?v=pcclNdwG8Vs">https://www.youtube.com/watch?v=pcclNdwG8Vs</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p><a href="https://www.youtube.com/watch?v=78RIsFqo9pM">https://www.youtube.com/watch?v=78RIsFqo9pM</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Breach & Attack Simulation</p>
                                <p><a href="/vtf_weekly/assets/pdf/Breach-and-Attack-Simulation-for-Dummies.pdf"><svg viewBox="0 0 16 16" class="file" style="width: 10%; height: 10%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM8.59473 12.7266V10.6279L8.54004 9.56152L9.06641 10.1152L9.59277 10.6484C9.68848 10.7646 9.8457 10.833 9.98926 10.833C10.2969 10.833 10.5293 10.6143 10.5293 10.3066C10.5293 10.1357 10.4678 10.0127 10.3379 9.90332L8.45117 8.16699C8.29395 8.02344 8.16406 7.96191 7.99316 7.96191C7.8291 7.96191 7.69922 8.02344 7.54199 8.16699L5.65527 9.90332C5.52539 10.0127 5.46387 10.1357 5.46387 10.3066C5.46387 10.6143 5.68945 10.833 6.00391 10.833C6.14746 10.833 6.29785 10.7646 6.40039 10.6484L6.92676 10.1152L7.45312 9.56152L7.39844 10.6279V12.7266C7.39844 13.0547 7.67188 13.3008 7.99316 13.3008C8.32129 13.3008 8.59473 13.0547 8.59473 12.7266Z"></path></svg></a></p>
                            </li>
                            <li class="inside-text">
                                <p>Threat Informed Defense 101</p>
                                <p><a href="/vtf_weekly/assets/pdf/Threat Informed Defense 101 .pdf"><svg viewBox="0 0 16 16" class="file" style="width: 10%; height: 10%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM8.59473 12.7266V10.6279L8.54004 9.56152L9.06641 10.1152L9.59277 10.6484C9.68848 10.7646 9.8457 10.833 9.98926 10.833C10.2969 10.833 10.5293 10.6143 10.5293 10.3066C10.5293 10.1357 10.4678 10.0127 10.3379 9.90332L8.45117 8.16699C8.29395 8.02344 8.16406 7.96191 7.99316 7.96191C7.8291 7.96191 7.69922 8.02344 7.54199 8.16699L5.65527 9.90332C5.52539 10.0127 5.46387 10.1357 5.46387 10.3066C5.46387 10.6143 5.68945 10.833 6.00391 10.833C6.14746 10.833 6.29785 10.7646 6.40039 10.6484L6.92676 10.1152L7.45312 9.56152L7.39844 10.6279V12.7266C7.39844 13.0547 7.67188 13.3008 7.99316 13.3008C8.32129 13.3008 8.59473 13.0547 8.59473 12.7266Z"></path></svg></a></p>
                            </li>
                            <li class="inside-text">
                                <p>CYBERSECURITY FRAMEWORK : <a href="https://www.nist.gov/cyberframework">https://www.nist.gov/cyberframework</a></p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <p><a href="https://www.youtube.com/watch?v=e_r813WOrpw">https://www.youtube.com/watch?v=e_r813WOrpw</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p><a href="https://www.youtube.com/watch?v=J9ToNuwmyF0https://www.youtube.com/watch?v=51kcOCUJXlo">https://www.youtube.com/watch?v=J9ToNuwmyF0https://www.youtube.com/watch?v=51kcOCUJXlo</a></p>
                                    </li>
                                </ol>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Red Canary Atomic Red - <a href="https://redcanary.com/blog/atomic-red-team-tests-catching-dragon-tail/">https://redcanary.com/blog/atomic-red-team-tests-catching-dragon-tail/</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Metta - <a href="https://github.com/uber-common/metta">Metta Github</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Infection Monkey - <a href="https://0x1.gitlab.io/pentesting/Infection-Monkey/">https://0x1.gitlab.io/pentesting/Infection-Monkey/</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Mitre Caldera - <a href="https://github.com/mitre/caldera">Caldera Github</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Prelude Operation - <a href=" https://github.com/preludeorg"> https://github.com/preludeorg</a></p>
                            </li>
                            <li class="inside-text">
                                <p>PurpleSharp - <a href="https://github.com/mvelazc0/PurpleSharp">PurpleSharp Github</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Endgame’s RTA - <a href="https://github.com/endgameinc/RTA">Endgame’s RTA Github</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://app.cybrary.it/browse/course/mitre-attack-adversary-emulation">https://app.cybrary.it/browse/course/mitre-attack-adversary-emulation</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://academy.attackiq.com/courses/top-attck-techniques">https://academy.attackiq.com/courses/top-attck-techniques</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://academy.attackiq.com/courses/countering-ransomware-with-mitre-attack">https://academy.attackiq.com/courses/countering-ransomware-with-mitre-attack</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://chrome.google.com/webstore/detail/attck-powered-suit/gfhomppaadldngjnmbefmmiokgefjddd?hl=en&authuser=0&utm_campaign=Cyber Industry&utm_medium=email&utm_content=219800362&utm_source=hs_email&_hsmi=219800362">https://chrome.google.com/webstore/detail/attck-powered-suit/gfhomppaadldngjnmbefmmiokgefjddd?hl=en&authuser=0&utm_campaign=Cyber Industry&utm_medium=email&utm_content=219800362&utm_source=hs_email&_hsmi=219800362</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p>APA guidelines</p>
                            </li>

                            <ol type=a>
                                <li class="inside-text">
                                    <a href="https://www.apa.org/practice/guidelines/">https://www.apa.org/practice/guidelines/</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=xWFqv-aJAXE">https://www.youtube.com/watch?v=xWFqv-aJAXE</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=hS7xBrWXmYU">https://www.youtube.com/watch?v=hS7xBrWXmYU</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.scribbr.com/apa-style/format/">https://www.scribbr.com/apa-style/format/</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.verywellmind.com/how-to-write-an-essay-in-apa-format-2794837">https://www.verywellmind.com/how-to-write-an-essay-in-apa-format-2794837</a>
                                </li>
                            </ol>   
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create a sample document about the topics you have learnt about this week in the Technology section using the APA Guidelines Format.</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 2, 
        title: 'Vulnerability management + SIEM/Log Management', 
        data: [
            {
                title: "Cyber Security",
                options: [
                    {
                        title: "Topics",
                        html: `
                            
                            <a role="button" style="padding:2px 2px; font-size: 1rem; border-radius: 8px; margin-left: 25%; color: #fff; text-decoration: none; background-color: #0d6efd; font-weight:400; border-color: #0d6efd;" 
                            href="https://www.linkedin.com/company/vtfoundation/mycompany/" target="_blank">VTF-LIVE Sep 23</a>
                            <br>
                            <br>
                            <li class="inside-text">
                                <p>SANS Vulnerability Management Maturity Model: <a href="https://www.sans.org/posters/key-metrics-cloud-enterprise-vmmm/">https://www.sans.org/posters/key-metrics-cloud-enterprise-vmmm/</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Vulnerability Management for Dummies: <a href="https://media-exp1.licdn.com/dms/document/C561FAQGizZFT2nyJEA/feedshare-document-pdf-analyzed/0/1654516170886?e=1658361600&v=beta&t=_TjpM2-UMjV9sYL9C4WpoSXlWnkCvgpzlNgCRP1HZwE">https://media-exp1.licdn.com/dms/document/C561FAQGizZFT2nyJEA/feedshare-document-pdf-analyzed/0/1654516170886?e=1658361600&v=beta&t=_TjpM2-UMjV9sYL9C4WpoSXlWnkCvgpzlNgCRP1HZwE</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Vulnerability-Assessment-Framework - <a href="https://github.com/Acheron-VAF/Vulnerability-Assessment-Framework"></a></p>
                            </li>
                            <li class="inside-text">
                                <p>Vulnerability Management - <a href="https://www.cisa.gov/sites/default/files/publications/CRR_Resource_Guide-VM_0.pdf">https://www.cisa.gov/sites/default/files/publications/CRR_Resource_Guide-VM_0.pdf</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Understanding the Basics of Network Scanning using Nmap - <a href="https://github.com/Samsar4/Ethical-Hacking-Labs/blob/master/2-Scanning-Networks/4-Nmap.md">https://github.com/Samsar4/Ethical-Hacking-Labs/blob/master/2-Scanning-Networks/4-Nmap.md</a></p>
                            </li>
                            <li class="inside-text">
                                <p>SIGMA Rules - <a href="https://socprime.com/blog/sigma-rules-the-beginners-guide/">https://socprime.com/blog/sigma-rules-the-beginners-guide/</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Sigma - <a href="https://github.com/SigmaHQ/sigma">https://github.com/SigmaHQ/sigma</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://github.com/nasbench/SIGMA-Resources">https://github.com/nasbench/SIGMA-Resources</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://m.youtube.com/watch?v=TAnBsrIJHro&feature=youtu.be">https://m.youtube.com/watch?v=TAnBsrIJHro&feature=youtu.be</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Nmap - <a href="https://cyberlab.pacific.edu/courses/comp178/labs/lab-3-nmap-scanning">https://cyberlab.pacific.edu/courses/comp178/labs/lab-3-nmap-scanning </a></p>
                            </li>
                            <li class="inside-text">
                                <p>Application - Specific Scanning with Nikto, Acunetix, and WPScan</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <ul>
                                <li class="inside-text">
                                    <p>Effective time management</p>
                                </li>
                            </ul>

                            <ol>
                                <li class="inside-text">
                                    <a href="https://www.microsoft.com/en-us/microsoft-365/business-insights-ideas/resources/time-management-101-how-to-manage-time">https://www.microsoft.com/en-us/microsoft-365/business-insights-ideas/resources/time-management-101-how-to-manage-time</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.microsoft.com/en-us/microsoft-365/business-insights-ideas/resources/9-effective-time-management-strategies">https://www.microsoft.com/en-us/microsoft-365/business-insights-ideas/resources/9-effective-time-management-strategies</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.indeed.com/career-advice/career-development/time-management-training">https://www.indeed.com/career-advice/career-development/time-management-training</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.thebalancecareers.com/level-1-management-skills-2275890">https://www.thebalancecareers.com/level-1-management-skills-2275890</a>
                                </li>
                            </ol>   
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create a document based on APA guidelines, about time management.</p>
                            </li>
                            <li class="inside-text">
                                <p>Convert that into pdf.</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 3, 
        title: 'OSINT', 
        data: [
            {
                title: "Cyber Security",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <a role="button" style="padding:2px 2px; font-size: 1rem; border-radius: 8px; margin-left: 25%; color: #fff; text-decoration: none; background-color: #0d6efd; font-weight:400; border-color: #0d6efd;" 
                            href="https://www.linkedin.com/company/vtfoundation/mycompany/" target="_blank">VTF-LIVE Sep 30</a>
                            <br>
                            <br>
                            <li class="inside-text">
                                <p>The Complete Open Source Intelligence (OSINT) Training Course - <a href="https://www.youtube.com/watch?v=opLD4zFB5z0">https://www.youtube.com/watch?v=opLD4zFB5z0</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Shodan <a href="/vtf_weekly/assets/pdf/Shodan.pdf"><svg viewBox="0 0 16 16" class="file" style="width: 10%; height: 10%; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden;"><path d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM8.59473 12.7266V10.6279L8.54004 9.56152L9.06641 10.1152L9.59277 10.6484C9.68848 10.7646 9.8457 10.833 9.98926 10.833C10.2969 10.833 10.5293 10.6143 10.5293 10.3066C10.5293 10.1357 10.4678 10.0127 10.3379 9.90332L8.45117 8.16699C8.29395 8.02344 8.16406 7.96191 7.99316 7.96191C7.8291 7.96191 7.69922 8.02344 7.54199 8.16699L5.65527 9.90332C5.52539 10.0127 5.46387 10.1357 5.46387 10.3066C5.46387 10.6143 5.68945 10.833 6.00391 10.833C6.14746 10.833 6.29785 10.7646 6.40039 10.6484L6.92676 10.1152L7.45312 9.56152L7.39844 10.6279V12.7266C7.39844 13.0547 7.67188 13.3008 7.99316 13.3008C8.32129 13.3008 8.59473 13.0547 8.59473 12.7266Z"></path></svg></a></p>
                            </li>
                            <li class="inside-text">
                                <p>GooFuzz <a href="https://amp.kitploit.com/2022/06/goofuzz-tool-to-perform-fuzzing-with.html?amp=1&m=1">https://amp.kitploit.com/2022/06/goofuzz-tool-to-perform-fuzzing-with.html?amp=1&m=1</a></p>
                            </li>
                            <li class="inside-text">
                                <p>Vulnerability Management - <a href="https://www.cisa.gov/sites/default/files/publications/CRR_Resource_Guide-VM_0.pdf">https://www.cisa.gov/sites/default/files/publications/CRR_Resource_Guide-VM_0.pdf</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.osinttechniques.com/osint-tools.html">https://www.osinttechniques.com/osint-tools.html</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.osinttechniques.com/osint-videos.html">https://www.osinttechniques.com/osint-videos.html</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            
                            <p>
                                <a href="https://learn.baselgovernance.org/enrol/index.php?id=79">https://learn.baselgovernance.org/enrol/index.php?id=79</a>
                            </p>
                            <li class="inside-text">
                                <a href="https://tryhackme.com/room/ohsint">https://tryhackme.com/room/ohsint</a>
                            </li>
                            <li class="inside-text">
                                <a href="https://tryhackme.com/room/webosint">https://tryhackme.com/room/webosint</a>
                            </li>
                            <li class="inside-text">
                                <a href="https://tryhackme.com/room/googledorking">https://tryhackme.com/room/googledorking</a>
                            </li>
                            <li class="inside-text">
                                <a href="https://tryhackme.com/room/searchlightosint">https://tryhackme.com/room/searchlightosint</a>
                            </li>
                            <li class="inside-text">
                                <a href="https://tryhackme.com/room/geolocatingimages">https://tryhackme.com/room/geolocatingimages</a>
                            </li> 
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            
                            <ol>
                                <li class="inside-text">
                                    <a href="https://bizfluent.com/13721510/6-ways-to-make-sure-you-dont-overcommit">https://bizfluent.com/13721510/6-ways-to-make-sure-you-dont-overcommit</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.bustle.com/articles/169823-5-ways-to-stop-overcommitting-yourself-because-its-totally-ok-to-say-no">https://www.bustle.com/articles/169823-5-ways-to-stop-overcommitting-yourself-because-its-totally-ok-to-say-no</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://goop.com/wellness/mindfulness/why-we-overcommit/">https://goop.com/wellness/mindfulness/why-we-overcommit/</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=Z_Baka9RVSo">https://www.youtube.com/watch?v=Z_Baka9RVSo</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=yrdUH0YHsV0">https://www.youtube.com/watch?v=yrdUH0YHsV0</a>
                                </li>
                            </ol>   
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create an audio only recording of 4 to 6 minutes, explaining how you will avoid over committing.</p>
                            </li>
                           
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 4, 
        title: 'Network Security', 
        data: [
            {
                title: "Cyber Security",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=DLiP7y51OAQ">https://www.youtube.com/watch?v=DLiP7y51OAQ</a></p>
                            </li>
                            <li class="inside-text">
                                <p>PFsense</p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <p>FREE - <a href="https://www.udemy.com/course/crash-course-manage-network-security-with-pfsense-firewall/">https://www.udemy.com/course/crash-course-manage-network-security-with-pfsense-firewall/</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=fsdm5uc_LsU">https://www.youtube.com/watch?v=fsdm5uc_LsU</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=wv1qTYR3faQ">https://www.youtube.com/watch?v=wv1qTYR3faQ</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Security Onion</p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <a href="https://securityonionsolutions.com/training/">https://securityonionsolutions.com/training/</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://blog.securityonion.net/2021/11/quick-malware-analysis-traffic-analysis.html">https://blog.securityonion.net/2021/11/quick-malware-analysis-traffic-analysis.html</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Scappy</p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <a href="https://scapy.readthedocs.io/en/latest/introduction.html">https://scapy.readthedocs.io/en/latest/introduction.html</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.studytonight.com/network-programming-in-python/introduction-to-scapy">https://www.studytonight.com/network-programming-in-python/introduction-to-scapy</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=YKxKnVE5FaE">https://www.youtube.com/watch?v=YKxKnVE5FaE</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=AutB5TVviPA">https://www.youtube.com/watch?v=AutB5TVviPA</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Guacamole</p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <a href="https://guacamole.apache.org/doc/0.9.0/gug/installing-guacamole.html">https://guacamole.apache.org/doc/0.9.0/gug/installing-guacamole.html</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://bobcares.com/blog/how-to-install-apache-guacamole/">https://bobcares.com/blog/how-to-install-apache-guacamole/</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=qy2mOQZnwpk">https://www.youtube.com/watch?v=qy2mOQZnwpk</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=Mjrj6tdj1wo">https://www.youtube.com/watch?v=Mjrj6tdj1wo</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=DGw6P5Lkj-U">https://www.youtube.com/watch?v=DGw6P5Lkj-U</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Honeypots</p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            
                            <li class="inside-text">
                                <p><a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/network-security">https://www.mygreatlearning.com/academy/learn-for-free/courses/network-security</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <ol>
                                <li class="inside-text">
                                    <a href="https://www.investopedia.com/terms/p/project-management.asp#:~:text=Project management involves the planning,%2C technology%2C and intellectual property">https://www.investopedia.com/terms/p/project-management.asp#:~:text=Project management involves the planning,%2C technology%2C and intellectual property</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.pmi.org/about/learn-about-pmi/what-is-project-management">https://www.pmi.org/about/learn-about-pmi/what-is-project-management</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=ztmaTF_Qs9A">https://www.youtube.com/watch?v=ztmaTF_Qs9A</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=Wk607ruc8P0">https://www.youtube.com/watch?v=Wk607ruc8P0</a>
                                </li>
                            </ol>   
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <a href="https://certiprof.com/pages/scrum-foundation-certificate-free">https://certiprof.com/pages/scrum-foundation-certificate-free</a>
                            </li>
                           
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 5, 
        title: 'Endpoint Security', 
        data: [
            {
                title: "Cyber Security",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p>Windows</p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <p><a href="https://docs.microsoft.com/en-us/azure/sentinel/skill-up-resources">https://docs.microsoft.com/en-us/azure/sentinel/skill-up-resources</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=fsdm5uc_LsU">https://www.youtube.com/watch?v=fsdm5uc_LsU</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=wv1qTYR3faQ">https://www.youtube.com/watch?v=wv1qTYR3faQ</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Linux</p>
                            </li>
                            <li class="inside-text">
                                <p>OSSEC</p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <a href="https://www.ossec.net/">https://www.ossec.net/</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=MNp_2a-yB_w">https://www.youtube.com/watch?v=MNp_2a-yB_w</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=JejFjdOFVus">https://www.youtube.com/watch?v=JejFjdOFVus</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Wazuh</p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=TfyCYt6S5XQ">https://www.youtube.com/watch?v=TfyCYt6S5XQ</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://documentation.wazuh.com/current/installation-guide/index.html">https://documentation.wazuh.com/current/installation-guide/index.html</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=kd5THDYTarM">https://www.youtube.com/watch?v=kd5THDYTarM</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>PsExec</p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <a href="https://www.itprotoday.com/windows-server/psexec-explainer-mark-russinovich">https://www.itprotoday.com/windows-server/psexec-explainer-mark-russinovich</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://docs.microsoft.com/en-us/sysinternals/downloads/psexec">https://docs.microsoft.com/en-us/sysinternals/downloads/psexec</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Bloodhound</p>
                            </li>
                            <li class="inside-text">
                                <p>Invoke-Obfuscation</p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <a href="https://github.com/danielbohannon/Invoke-Obfuscation"></a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.danielbohannon.com/blog-1/2017/12/2/the-invoke-obfuscation-usage-guide">https://www.danielbohannon.com/blog-1/2017/12/2/the-invoke-obfuscation-usage-guide</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://medium.com/@ammadb/invoke-obfuscation-hiding-payloads-to-avoid-detection-87de291d61d3">https://medium.com/@ammadb/invoke-obfuscation-hiding-payloads-to-avoid-detection-87de291d61d3</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://cqureacademy.com/blog/hacks/invoke-obfuscation">https://cqureacademy.com/blog/hacks/invoke-obfuscation</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <a href="https://www.youtube.com/watch?v=6o7hMytqBfA">https://www.youtube.com/watch?v=6o7hMytqBfA</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>CrackMapExec</p>
                                <ol type=a>
                                    <li class="inside-text">
                                        <a href="https://github.com/byt3bl33d3r/CrackMapExec">https://github.com/byt3bl33d3r/CrackMapExec</a></p>
                                    </li>
                                </ol>
                            </li>
                            <li class="inside-text">
                                <p>Details Of SysmonSimulator : <a href="https://lnkd.in/eDYxnp5E">https://lnkd.in/eDYxnp5E</a></p>
                                <ul>
                                    <li class="inside-text">
                                        <p>Details Of Sysmon : <a href="https://lnkd.in/e5xHBDqj">https://lnkd.in/e5xHBDqj</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p>GitHub : <a href="https://lnkd.in/eTqfEfd8">https://lnkd.in/eTqfEfd8</a></p>
                                    </li>
                                    <li class="inside-text">
                                        <p>Latest Release ( Source And EXE File ) : <a href="https://lnkd.in/ewHGcFf2">https://lnkd.in/ewHGcFf2</a></p>
                                    </li>
                                </ul>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            
                            <p>
                                <a href="https://www.udemy.com/course/check-point-jump-start-harmony-endpoint-security/">https://www.udemy.com/course/check-point-jump-start-harmony-endpoint-security/</a>
                            </p>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <ol>
                                <li class="inside-text">
                                    <a href="https://theinvestorsbook.com/effective-communication.html">https://theinvestorsbook.com/effective-communication.html</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.helpguide.org/articles/relationships-communication/effective-communication.htm">https://www.helpguide.org/articles/relationships-communication/effective-communication.htm</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.proofhub.com/articles/effective-communication">https://www.proofhub.com/articles/effective-communication</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=etlI6J5MG0w">https://www.youtube.com/watch?v=etlI6J5MG0w</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=2Yw6dFQBklA">https://www.youtube.com/watch?v=2Yw6dFQBklA</a>
                                </li>
                                <li class="inside-text">
                                    <a href="https://www.youtube.com/watch?v=7JZ1v-VwTXg">https://www.youtube.com/watch?v=7JZ1v-VwTXg</a>
                                </li>
                            </ol>   
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create a You-tube Video of 5-6 minutes on “ Effective Communication“</p>
                            </li>
                           
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 6, 
        title: 'Web App Security', 
        data: [
            {
                title: "Cyber Security",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/burpsuitebasics">https://tryhackme.com/room/burpsuitebasics</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://youtu.be/UBWMLFbjPBc">https://youtu.be/UBWMLFbjPBc</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://m.youtube.com/c/RanaKhalil101">https://m.youtube.com/c/RanaKhalil101</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/owasptop10">https://tryhackme.com/room/owasptop10</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://alison.com/course/web-application-security">https://alison.com/course/web-application-security</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.mindtools.com/pages/article/newTMM_79.htm">https://www.mindtools.com/pages/article/newTMM_79.htm</a></p>
                            </li>
                            <li class="inside-text">
                                <a href="https://employmenthero.com/blog/team-conflict-management/#:~:text=Take action early to help,Never take sides.">https://employmenthero.com/blog/team-conflict-management/#:~:text=Take action early to help,Never take sides.</a>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://hbr.org/2017/07/how-to-handle-a-disagreement-on-your-team">https://hbr.org/2017/07/how-to-handle-a-disagreement-on-your-team</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=ElZ7MRIxzZU">https://www.youtube.com/watch?v=ElZ7MRIxzZU</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=2l-AOBz69KU">https://www.youtube.com/watch?v=2l-AOBz69KU</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Record video for 5 -10 min on topic Team conflict management with a scenario to explain how you will handle the situation.</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 7, 
        title: 'Virtualization Fundamentals', 
        data: [
            {
                title: "Cyber Security",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.redhat.com/en/topics/virtualization/what-is-virtualization">https://www.redhat.com/en/topics/virtualization/what-is-virtualization</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=Ci4jCxzbRJY">https://www.youtube.com/watch?v=Ci4jCxzbRJY</a></p>
                            </li>
                            <li class="inside-text">
                                <p>VMware HOL</p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.udemy.com/course/virtualization-one-hour-crash-course/">https://www.udemy.com/course/virtualization-one-hour-crash-course/</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                        <li class="inside-text">
                            <p><a href="https://www.indeed.com/career-advice/interviewing/what-is-your-greatest-accomplishment">https://www.indeed.com/career-advice/interviewing/what-is-your-greatest-accomplishment</a></p>
                        </li>
                        <li class="inside-text">
                            <a href="https://www.indeed.com/career-advice/resumes-cover-letters/listing-accomplishments-on-your-resume">https://www.indeed.com/career-advice/resumes-cover-letters/listing-accomplishments-on-your-resume</a>
                        </li>
                        <li class="inside-text">
                            <p><a href="https://www.cnbc.com/2017/11/30/how-to-describe-your-past-work-experience-in-a-job-interview.html">https://www.cnbc.com/2017/11/30/how-to-describe-your-past-work-experience-in-a-job-interview.html</a></p>
                        </li>
                        <li class="inside-text">
                            <p><a href="https://ca.indeed.com/career-advice/resumes-cover-letters/achievement-in-resume">https://ca.indeed.com/career-advice/resumes-cover-letters/achievement-in-resume</a></p>
                        </li>
                        <li class="inside-text">
                            <p><a href="https://www.forbes.com/sites/amymorin/2017/01/29/7-ways-to-talk-about-your-accomplishments-without-sounding-like-a-braggart/?sh=414d434b6fcchttps://www.indeed.com/career-advice/resumes-cover-letters/years-of-experience-on-resume">https://www.forbes.com/sites/amymorin/2017/01/29/7-ways-to-talk-about-your-accomplishments-without-sounding-like-a-braggart/?sh=414d434b6fcchttps://www.indeed.com/career-advice/resumes-cover-letters/years-of-experience-on-resume</a></p>
                        </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create a YouTube video on “Highlighting your past accomplishments in the company to your manager” for 5 mins.</p>
                            </li>
                            <li class="inside-text">
                                <p>Create Google slide with 1 slide on “Give 5 reasons for promotion in VTF”</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 8, 
        title: 'Container fundamentals', 
        data: [
            {
                title: "Cyber Security",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://collabnix.com/docker-cheatsheet/">https://collabnix.com/docker-cheatsheet/</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://github.com/David-VTUK/CKA-StudyGuide"></a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://blog.cloudnativefolks.org/introduction-to-kubernetes-part-3-pods-scheduling-sequence">https://blog.cloudnativefolks.org/introduction-to-kubernetes-part-3-pods-scheduling-sequence</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://lnkd.in/eRTVDJ3J">https://lnkd.in/eRTVDJ3J</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.linkedin.com/posts/semaan_ebook-kubernetes-essentials-ugcPost-6956962563158851584-7Xen?utm_source=linkedin_share&utm_medium=ios_app">https://www.linkedin.com/posts/semaan_ebook-kubernetes-essentials-ugcPost-6956962563158851584-7Xen?utm_source=linkedin_share&utm_medium=ios_app</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.edx.org/course/fundamentals-of-containers-kubernetes-and-red-hat">https://www.edx.org/course/fundamentals-of-containers-kubernetes-and-red-hat</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=s2NlVas0Cew">https://www.youtube.com/watch?v=s2NlVas0Cew</a></p>
                            </li>
                            <li class="inside-text">
                                <a href="https://resume.io/blog/why-do-you-want-to-work-here">https://resume.io/blog/why-do-you-want-to-work-here</a>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://resources.biginterview.com/interview-questions-answers/why-do-you-want-to-work-here/">https://resources.biginterview.com/interview-questions-answers/why-do-you-want-to-work-here/</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://in.indeed.com/career-advice/interviewing/why-do-you-want-to-join-our-company">https://in.indeed.com/career-advice/interviewing/why-do-you-want-to-join-our-company</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create a Youtube video of 5-6 minutes on “why do you want to join VTF”</p>
                            </li>
                        `
                    }
                ]
            }
    
        ]
    },
    
    
    {
        week: 9, 
        title: 'Cloud Fundamentals', 
        data: [
            {
                title: "Cloud (AWS)",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://m.youtube.com/c/LearnCantrill/playlists">https://m.youtube.com/c/LearnCantrill/playlists</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://github.com/acantril/learn-cantrill-io-labs"></a></p>
                            </li>
                            <li class="inside-text">
                                <p>Navigator - <a href="https://atlas.mitre.org/navigator/">https://atlas.mitre.org/navigator/</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://cloudstudio.com.au/category/public-cloud/">https://cloudstudio.com.au/category/public-cloud/</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/aws-for-beginners1">https://www.mygreatlearning.com/academy/learn-for-free/courses/aws-for-beginners1</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-foundations">https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-foundations</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Topics",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://sageclinic.org/blog/healthy-body-mental-health/">https://sageclinic.org/blog/healthy-body-mental-health/</a></p>
                            </li>
                            <li class="inside-text">
                                <a href="https://www.linkedin.com/pulse/how-important-mncs-deal-mental-health-problem-chirag-naithani/">https://www.linkedin.com/pulse/how-important-mncs-deal-mental-health-problem-chirag-naithani/</a>
                            </li>
                            <li class="inside-text">
                                <p><a href="http://ignited.in/I/a/99710">http://ignited.in/I/a/99710</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=rTNEwzbpTTQ">https://www.youtube.com/watch?v=rTNEwzbpTTQ</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.youtube.com/watch?v=vG5S4Kkz9lo">https://www.youtube.com/watch?v=vG5S4Kkz9lo</a></p>
                            </li>
                        `
                    },
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create a Youtube video with duration 5-6 minutes on  “mental and physical health ”</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    },
    {
        week: 10, 
        title: 'CTF or Threat Hunting Lab', 
        data: [
            {
                title: "Technology",
                options: [
                    {
                        title: "Cyber Security",
                        html: `
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/basicpentestingjt">https://tryhackme.com/room/basicpentestingjt</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/easyctf">https://tryhackme.com/room/easyctf</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/ohsint">https://tryhackme.com/room/ohsint</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/rrootme">https://tryhackme.com/room/rrootme</a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://tryhackme.com/room/lazyadmin">https://tryhackme.com/room/lazyadmin</a></p>
                            </li>
                            <li class="inside-text">
                                <p><strong>TRAFFIC ANALYSIS EXERCISE - </strong></strong><a href="https://www.malware-traffic-analysis.net/2015/08/31/page2.html"></a></p>
                            </li>
                            <li class="inside-text">
                                <p><a href="https://www.malware-traffic-analysis.net/2015/08/31/index.html">https://www.malware-traffic-analysis.net/2015/08/31/index.html</a></p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Business Etiquette",
                options: [
                    {
                        title: "Exercises",
                        html: `
                            <li class="inside-text">
                                <p>Create Google Slides and share your experience and learning from VTF</p>
                            </li>
                        `
                    }
                ]
            },
            {
                title: "Network Visibility",
                html: `
                    <li class="inside-text">
                        <p>Update your linkedin and twitter profiles such as names, location, headshot, education, certifications etc.</p>
                    </li>
                    <li class="inside-text">
                        <p>Add VTF internship as an experience in your profiles</p>
                    </li>
                    <li class="inside-text">
                        <p>Submit 1 post about what you have learned this week during your VTF internship</p>
                    </li>
                    <li class="inside-text">
                        <p>Be sure to add #VTFoundation and following line in your post</p>
                    </li>
                    <ol type=a>
                        <li class="inside-text">
                            Follow VTF: <a href="http://q-r.to/VTFoundation">http://q-r.to/VTFoundation</a>
                        </li>
                    </ol>
                `
            }
        ]
    }
]

function changeBodyHtml(data) {
    $("#weekModal #weeklyCardData").html(data);

}

function showModal(week) {
    const {title, topics, data} = weekData.filter(data => data.week === week)[0];

    $("#weekModal .week-title").html(`Week ${week}: ${title}`);

    $("#weekModal #weeklyCardSidebar").html("");
    data.map((item, key) => $("#weekModal #weeklyCardSidebar").append(

        item.options ? 
            `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-heading${key}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${key}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            ${item.title}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapse${key}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${key}">
                        <div class="accordion-body">
                            ${item.options.map((option, index) => 
                                index === item.options.length - 1 ?
                                    "<button class='inner-button last' onclick='changeBodyHtml(" + JSON.stringify(option.html) + ")'>" + option.title + "</button>"
                                :
                                    "<button class='inner-button' onclick='changeBodyHtml(" + JSON.stringify(option.html) + ")'>" + option.title + "</button>"
                            ).join("")}
                        </div>
                    </div>
                </div>
            `
        :
            `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-single-button" type="button" onclick='changeBodyHtml(${JSON.stringify(item.html)})'>
                            ${item.title}
                        </button>
                    </h2>
                </div>
            `

    ))

    $("#weekModal #weeklyCardData").html(data[0].options ? data[0].options[0].html : data[0].html);

    $("#weekModal").show();
    $("#weekModal .weekCard").css("margin-top", "-500px").animate({
        marginTop: "0"
    }, 500, () => modalOpen = true);
}

function closeModal() {
    
    $("#weekModal .weekCard").css("margin-top", "0").animate({
        marginTop: "500px"
    }, 200);

    $("#weekModal").fadeOut("fast");
    modalOpen = false;
    
}

$( document ).ready(function() {
    $("#weekModal").hide();
    // Populate All Weeks
    const section = weekData.map(data => `
        <div class="listItem${data.week < currWeek ? ' completed' : data.week === currWeek ? ' current' : ''}">
            <span><strong>Week-${data.week}</strong></span>
            ${data.week <= currWeek ?
                `<button type="button" class="btn btn-primary btn-sm" onclick="showModal(${data.week})">
                    ${data.week === currWeek ? 'View' : 'Show'}
                </button>`
                :
                ""
            }
            <p>${data.title}</p>
        </div>
    `)
    $("#sessionSection").html(section);

    //Populate Current Week
    const {week, title, data} = weekData.filter(data => data.week === currWeek)[0];
    $("#currWeekContent").html(`
        <div class="d-flex justify-content-between mb-4">
            <span class="card-title"><strong>Week ${week}: ${title} </strong></span>
            <span class="card-text">
                <svg height="20" width="20" class="blinking">
                    <circle cx="10" cy="8" r="5" fill="#00ab08" /> 
                </svg> <span style="text-transform: uppercase; font-size: 0.8em; font-weight: 600">current week</span>
            </span>
        </div>
        <ol id="currWeekList" style="font-size: 0.9em; max-height: 800px; overflow-y: auto">
            ${data[0].options ? data[0].options[0].html : data[0].html}
        </ol>
    `)

});

// Modal Mouse Click outside
$(document).mouseup(function(e) {
    const container = $("#weekModal .weekCard");
    if (modalOpen && (!container.is(e.target) && container.has(e.target).length === 0)) {
        closeModal();
    }
});

// Set the date we're counting down to
var countDownDate = new Date("Sep 23, 2022 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Click to join VTF LIVE";
  }
}, 1000);
