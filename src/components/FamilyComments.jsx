// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Card, CardContent, CardHeader, CardTitle, Avatar, AvatarFallback, AvatarImage, Button, Input } from '@/components/ui';
// @ts-ignore;
import { Heart, MessageCircle } from 'lucide-react';

const mockComments = [{
  id: 1,
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
  name: 'Mom',
  content: '今天股票涨得不错，继续保持！',
  time: '2h ago',
  likes: 5
}, {
  id: 2,
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
  name: 'Dad',
  content: '建议关注一下新能源板块，最近有潜力。',
  time: '5h ago',
  likes: 3
}, {
  id: 3,
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
  name: 'Sister',
  content: '记得分散投资，不要把鸡蛋放在一个篮子里。',
  time: '1d ago',
  likes: 8
}];
export function FamilyComments() {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');
  const handlePostComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
        name: 'Me',
        content: newComment,
        time: 'Just now',
        likes: 0
      };
      setComments([newCommentObj, ...comments]);
      setNewComment('');
    }
  };
  const handleLike = id => {
    setComments(comments.map(comment => comment.id === id ? {
      ...comment,
      likes: comment.likes + 1
    } : comment));
  };
  return <Card className="bg-[#1a1a1b] border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-[#42c2cf]">家庭评论 Family Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input placeholder="Share your thoughts..." value={newComment} onChange={e => setNewComment(e.target.value)} className="bg-[#050506] border-gray-700 text-gray-300 placeholder-gray-500 text-sm" onKeyPress={e => e.key === 'Enter' && handlePostComment()} />
            <Button onClick={handlePostComment} className="bg-[#42c2cf] hover:bg-[#42c2cf]/80 text-white text-sm">
              Post
            </Button>
          </div>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {comments.map(comment => <div key={comment.id} className="flex gap-3 p-3 bg-[#050506] rounded-lg">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.avatar} />
                  <AvatarFallback>{comment.name[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#42c2cf]">{comment.name}</span>
                    <span className="text-xs text-gray-500">{comment.time}</span>
                  </div>
                  
                  <p className="text-sm text-gray-300 mt-1">{comment.content}</p>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <button onClick={() => handleLike(comment.id)} className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#42c2cf]">
                      <Heart className="h-3 w-3" />
                      {comment.likes}
                    </button>
                    <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#42c2cf]">
                      <MessageCircle className="h-3 w-3" />
                      Reply
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </CardContent>
    </Card>;
}