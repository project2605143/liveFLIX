import type { Metadata } from 'next'
import { ArticlePage } from '@/components/seo-page'

export const metadata: Metadata = { title: 'How to Find Live News Coverage Worldwide | Streamline', description: 'Learn how to find live news coverage from around the world by combining country, language, and genre filters.' }

export default function NewsGuide() {
  return <ArticlePage eyebrow="Follow the story" title="How to find live news coverage from around the world" description="A single headline rarely tells the whole story. A global live news lineup helps you compare context, language, and local reporting as events unfold." sections={[{ heading: 'Start with the country closest to the story', body: 'Country pages give you a practical first filter. Local channels often carry context and interviews that international coverage cannot replicate.' }, { heading: 'Use language as a second lens', body: 'English can be useful for broad access, while regional languages bring more direct local reporting. Keep both available when you are following a developing story.' }, { heading: 'Compare more than one source', body: 'A healthy news routine includes different editorial perspectives. Use Streamline to move between channels rather than relying on a single feed.' }, { heading: 'Save the channels you trust', body: 'Once you find reliable coverage, add it to favorites. That turns a large global directory into a quick daily briefing.' }]} />
}
