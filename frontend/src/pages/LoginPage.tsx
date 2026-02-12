import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useState, useEffect } from 'react';
import { LogIn, Zap } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, login } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!username || !password) {
        setError('Please enter both username and password');
        return;
      }
      
      await login(username, password);
      navigate('/');
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-base to-accent/5 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header Card */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-2xl shadow-warm">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-secondary mb-2">EDL Info</h1>
          <p className="text-gray-600">Electricity Distribution Lanka</p>
          <p className="text-sm text-gray-500 mt-2">Internal Employee Portal</p>
        </div>

        {/* Login Form */}
        <div className="bg-surface rounded-2xl border border-border shadow-soft p-8">
          <h2 className="text-2xl font-bold text-secondary mb-6">Welcome Back</h2>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-muted text-secondary placeholder-gray-400 transition-all"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-muted text-secondary placeholder-gray-400 transition-all"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-6 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-warm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <LogIn className="h-5 w-5" />
              <span>{loading ? 'Logging in...' : 'Sign In'}</span>
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500 space-y-2">
            <p>Demo Credentials:</p>
            <p className="font-mono text-gray-400">
              Username: <strong className="text-secondary">user</strong>
            </p>
            <p className="font-mono text-gray-400">
              Password: <strong className="text-secondary">pass</strong>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>For EDL employees only</p>
          <p>© 2026 Electricity Distribution Lanka (Pvt) Ltd</p>
        </div>
      </div>
    </div>
  );
}
